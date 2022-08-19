import {
  GenderType,
  IDefaultCallbackPattern,
  ITokens,
} from "../../../../types/types";
import { Dispatch, SetStateAction } from "react";
import { IUserModel } from "../../../../lib/models/IUserModel";

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
  gender: GenderType;
  password: string;
  email: string;
  emailToken: string;
}

export type INewRegisterUserData = Omit<
  INewRegisterUser,
  "password" | "emailToken" | "fulfilledCallback" | "rejectCallback" | "email"
> & { setError: Dispatch<SetStateAction<string>> };

export interface IUserLogin extends Partial<IDefaultCallbackPattern> {
  email: string;
  password: string;
}

export type FetchUserModelDataType = Pick<ITokens, "accessToken"> &
  Partial<IDefaultCallbackPattern>;

export type FetchUserModelReturnData = IUserModel | "error";

export interface IResetPasswordData extends IDefaultCallbackPattern {
  email: string;
  emailToken: string;
  password: string;
}

type UserUpdateDataType = Partial<IUserModel> & IDefaultCallbackPattern;
