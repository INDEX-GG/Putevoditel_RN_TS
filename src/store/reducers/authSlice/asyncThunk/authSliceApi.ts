import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IDefaultSuccessResponse,
  IStore,
  ITokens,
} from "../../../../types/types";
import axios from "axios";
import {
  EmailCodeError,
  FetchUserModelDataType,
  FetchUserModelReturnData,
  ICheckEmailCode,
  ICheckEmailCodeResponse,
  ICheckRegistrationResponse,
  IEmail,
  IEmailCodeResponse,
  INewRegisterUser,
  IResetPasswordData,
  IUserLogin,
  UserUpdateDataType,
} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUserModel } from "../../../../lib/models/IUserModel";
import {
  getBirthdayBackendData,
  getNormalDate,
} from "../../../../lib/services/services";

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
      const { emailToken, email, birthday, password, ...otherData } = data;

      const sendData = {
        ...otherData,
        password: password.trim(),
        birthday: getBirthdayBackendData(birthday),
      };

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
          dispatch(
            fetchLoginUser({
              email,
              password: password,
            }),
          );
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
  async (
    { email, password, fulfilledCallback, rejectCallback },
    { extra: api, dispatch },
  ) => {
    try {
      const response = await api.request<ITokens>({
        url: "/api/v1/login/login",
        method: "post",
        auth: { username: email, password: password.trim() },
        data: `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`,
      });
      if (response.data?.refreshToken && response.data.accessToken) {
        AsyncStorage.setItem("@accessToken", response.data.accessToken).then(
          () => {
            dispatch(
              fetchUserModel({
                accessToken: response.data.accessToken,
                fulfilledCallback,
                rejectCallback: () => {
                  if (rejectCallback)
                    rejectCallback("Ошибка получения пользователя");
                },
              }),
            );
          },
        );
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (rejectCallback && status) {
          switch (status) {
            case 400:
              rejectCallback("Неверный пароль");
              break;
            default:
              rejectCallback("Ошибка сервера");
          }
        }
      }
    }
  },
);

export const fetchUserModel = createAsyncThunk<
  FetchUserModelReturnData,
  FetchUserModelDataType,
  IStore
>(
  "authSlice/userModel",
  async (
    { accessToken, rejectCallback, fulfilledCallback },
    { extra: api },
  ) => {
    try {
      const response = await api.get<IUserModel>("/api/v1/users/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.data.id) {
        AsyncStorage.setItem("@user", JSON.stringify(response.data)).then(
          () => {
            if (fulfilledCallback) {
              fulfilledCallback();
            }
          },
        );
      }
      return {
        ...response.data,
        birthday: getNormalDate(response.data.birthday),
      };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (rejectCallback) {
          if (e.code === "ERR_NETWORK") {
            rejectCallback("ERR_NETWORK");
          }
          switch (status) {
            case 500:
              rejectCallback("User not Found");
              break;
            default:
              rejectCallback("Ошибка получения пользователя");
          }
        }
      }
      return "error";
    }
  },
);

export const fetchResetPassword = createAsyncThunk<
  void,
  IResetPasswordData,
  IStore
>(
  "authSlice/resetPassword",
  async (
    { email, password, fulfilledCallback, rejectCallback, emailToken },
    { extra: api, dispatch },
  ) => {
    try {
      const response = await api.post<IDefaultSuccessResponse>(
        "/api/v1/login/reset-password",
        {
          new_password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${emailToken}`,
          },
        },
      );
      switch (response.status) {
        case 200:
          fulfilledCallback();
          dispatch(fetchLoginUser({ email, password }));
          break;
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (rejectCallback) {
          const status = e.response?.status;
          switch (status) {
            case 400:
              rejectCallback("Пользователя с этой почтой не существует");
              break;
            default:
              rejectCallback("Ошибка сервера");
              break;
          }
        }
      }
    }
  },
);

export const fetchUserUpdate = createAsyncThunk<
  IUserModel | string,
  UserUpdateDataType,
  IStore
>(
  "authSlice/userUpdate",
  async ({ rejectCallback, fulfilledCallback, ...data }, { extra: api }) => {
    try {
      const { birthday, ...otherData } = data;
      const sendData = { ...otherData } as Partial<IUserModel>;
      if (birthday) sendData.birthday = getBirthdayBackendData(birthday);
      const accessToken = await AsyncStorage.getItem("@accessToken");

      console.log(sendData);
      const response = await api.put<IUserModel>("/api/v1/users/me", sendData, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const userModel = {
        ...response.data,
        birthday: getNormalDate(response.data.birthday),
      };

      switch (response.status) {
        case 200:
          fulfilledCallback();
          AsyncStorage.setItem("@user", JSON.stringify(userModel)).then(
            () => null,
          );
          break;
      }

      return userModel;
    } catch (e) {
      console.log(e);
      if (axios.isAxiosError(e)) {
        if (e.code === "ERR_NETWORK") {
          console.log("Ошибка интернета");
        }
      }
      rejectCallback("Ошибка изменения данных");
      return "Ошибка изменения данных";
    }
  },
);
