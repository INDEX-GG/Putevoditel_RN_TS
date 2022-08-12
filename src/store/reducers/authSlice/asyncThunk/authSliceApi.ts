import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDefaultCallbackPattern, IStore } from "../../../../types/types";

export interface IEmail extends IDefaultCallbackPattern {
  email: string;
}

export interface ICheckRegistrationResponse {
  emailRegistration: boolean;
}

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

type IEmailCodeResponse =
  | "success"
  | "Usage limit exceeded"
  | "User with this email already exist";

export const fetchSendEmailCode = createAsyncThunk<
  IEmailCodeResponse,
  IEmail,
  IStore
>(
  "authSlice/sendEmailCode",
  async ({ email, rejectCallback, fulfilledCallback }, { extra: api }) => {
    const response = await api.get<{ msg: IEmailCodeResponse }>(
      `/api/v1/email/sendVerificationCode/${email}`,
    );

    switch (response.status) {
      case 200:
        fulfilledCallback();
        break;
      case 400:
        rejectCallback("Превышен лимит, попробуйте позже");
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

    return response.data.msg;
  },
);

export interface ICheckEmailCode {
  email: string;
  code: string;
}

export interface ICheckEmailCodeResponse {
  emailToken?: string;
}

export const fetchCheckEmailCode = createAsyncThunk<
  ICheckEmailCodeResponse,
  ICheckEmailCode,
  IStore
>("authSlice/checkEmailCode", async ({ email, code }, { extra: api }) => {
  const response = await api.get<ICheckEmailCodeResponse>(
    `/api/v1/email/check_verification_code/${email}/${code}`,
  );
  console.log(email, code, response.data);
  return { emailToken: "123" };
});
