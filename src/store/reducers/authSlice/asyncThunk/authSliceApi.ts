import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IDefaultSuccessResponse,
  IStore,
  ITokens,
} from "../../../../types/types";
import axios from "axios";
import {
  EmailCodeError,
  ICheckEmailCode,
  ICheckEmailCodeResponse,
  ICheckRegistrationResponse,
  IEmail,
  IEmailCodeResponse,
  INewRegisterUser,
  IUserLogin,
} from "./types";

export const fetchCheckRegistration = createAsyncThunk<
  ICheckRegistrationResponse | string,
  IEmail,
  IStore
>(
  "authSlice/checkUser",
  async (
    { email, rejectCallback, fulfilledCallback },
    { extra: api, rejectWithValue },
  ) => {
    try {
      const response = await api.get<ICheckRegistrationResponse>(
        `/api/v1/email/checkRegistration/${email}`,
      );
      if (response.data.emailRegistration) {
        fulfilledCallback();
      } else {
        rejectCallback();
      }
      return response.data;
    } catch (e) {
      return rejectWithValue("Bad request");
    }
  },
);

export const fetchSendEmailCode = createAsyncThunk<
  IEmailCodeResponse,
  IEmail,
  IStore
>(
  "authSlice/sendEmailCode",
  async ({ email, rejectCallback, fulfilledCallback }, { extra: api }) => {
    try {
      const response = await api.get<{ msg: IEmailCodeResponse }>(
        `/api/v1/email/sendVerificationCode/${email.trim()}`,
      );

      switch (response.status) {
        case 200:
          fulfilledCallback();
          break;
      }

      return response.data.msg;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        switch (status) {
          case 400:
            rejectCallback("Превышено количество попыток, повторите позже");
            break;
          case 409:
            rejectCallback("К этой почте привязан аккаунт");
            break;
          case 422:
            rejectCallback("Ошибка запроса");
            break;
          case 500:
            rejectCallback("Ошибка интернета");
            break;
        }
        const data = e.response?.data as {
          detail: { msg: IEmailCodeResponse };
        };
        return data.detail.msg;
      }
      return "Server Error";
    }
  },
);

export const fetchCheckEmailCode = createAsyncThunk<
  void,
  ICheckEmailCode,
  IStore
>(
  "authSlice/checkEmailCode",
  async ({ email, code, successCallback, rejectCallback }, { extra: api }) => {
    try {
      const response = await api.get<
        ICheckEmailCodeResponse | IDefaultSuccessResponse
      >(`/api/v1/email/check_verification_code/${email}/${code}`);

      switch (response.status) {
        case 200:
          if ("emailToken" in response.data) {
            successCallback(response.data.emailToken);
          }
          break;
        case 500:
          rejectCallback("Ошибка интернета");
          break;
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const response = e.response?.data;
        const responseTyped = response as { detail: { msg: EmailCodeError } };
        const message = responseTyped.detail.msg;

        switch (message) {
          case "number of attempts exceeded":
            rejectCallback("Превышено количество попыток, попробуйте позже");
            break;
          case "wrong verification code":
            rejectCallback("Неправильный код");
            break;
          default:
            rejectCallback("Ошибка интернета");
        }
      }
    }
  },
);

export const fetchRegistrationUser = createAsyncThunk<
  string,
  INewRegisterUser,
  IStore
>(
  "authSlice/userRegistration",
  async (
    { rejectCallback, fulfilledCallback, ...data },
    { extra: api, dispatch },
  ) => {
    try {
      const { emailToken, email, birthday, ...otherData } = data;
      const birthdayArr = birthday.split(".");
      const birthdayYear = birthdayArr[2];
      const birthdayMonth = birthdayArr[1];
      const birthdayDay = birthdayArr[0];
      const birthdayString = `${birthdayYear}-${birthdayMonth}-${birthdayDay}`;

      const sendData = { ...otherData, birthday: birthdayString };

      const response = await api.post<IDefaultSuccessResponse>(
        "/api/v1/users",
        sendData,
        {
          headers: { Authorization: `Bearer ${emailToken}` },
        },
      );

      switch (response.status) {
        case 201:
          fulfilledCallback();
          dispatch(fetchLoginUser({ email, password: otherData.password }));
      }

      return "success";
    } catch (e) {
      if (axios.isAxiosError(e)) {
        rejectCallback("Ошибка регистрации");
      }
      return "failed";
    }
  },
);

export const fetchLoginUser = createAsyncThunk<void, IUserLogin, IStore>(
  "authSlice/userLogin",
  async (data, { extra: api }) => {
    const response = await api.post<ITokens>("/api/v1/login/login", data);
    if (response.data?.refreshToken && response.data.accessToken) {
      console.log(response.data);
    }
  },
);
