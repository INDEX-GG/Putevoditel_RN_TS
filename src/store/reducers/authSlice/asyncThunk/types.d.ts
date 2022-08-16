import { IDefaultCallbackPattern } from "../../../../types/types";
import { Dispatch, SetStateAction } from "react";

export interface IEmail extends IDefaultCallbackPattern {
  email: string;
}

export interface ICheckRegistrationResponse {
  emailRegistration: boolean;
}

type IEmailCodeResponse =
  | "success"
  | "Usage limit exceeded"
  | "Server Error"
  | "User with this email already exist";

export interface ICheckEmailCode
  extends Pick<IDefaultCallbackPattern, "rejectCallback"> {
  email: string;
  code: string;
  successCallback: (emailToken: string) => void;
}

export interface ICheckEmailCodeResponse {
  emailToken: string;
}

export type EmailCodeError =
  | "number of attempts exceeded"
  | "wrong verification code";

export interface INewRegisterUser extends IDefaultCallbackPattern {
  name: string;
  surname: string;
  patronymic: string;
  birthday: string;
  phone: string;
  passport: string;
  address: string;
  familyComposition: string;
  gender: "male" | "female";
  password: string;
  email: string;
  emailToken: string;
}

export type INewRegisterUserData = Omit<
  INewRegisterUser,
  "password" | "emailToken" | "fulfilledCallback" | "rejectCallback" | "email"
> & { setError: Dispatch<SetStateAction<string>> };

export interface IUserLogin {
  email: string;
  password: string;
}
