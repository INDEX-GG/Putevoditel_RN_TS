import { StateValueType } from "../types";
import { Dispatch, SetStateAction } from "react";
import { INewRegisterUserData } from "../../../../store/reducers/authSlice/asyncThunk/types";

export type IEmailChangeFunction = (emailToken: string) => void;
export type IPersonalDataSendData = (data: INewRegisterUserData) => void;

export interface IEmailScreenProps {
  emailValue: StateValueType;
  isVisibleDescription?: boolean;
  setEmailValue: Dispatch<SetStateAction<StateValueType>>;
  handleSubmitEmailCode: () => void;
}

interface IEmailCodeScreenProps {
  email: string;
  handlePressBack: () => void;
  handleChangeEmailToken: IEmailChangeFunction;
}

export interface IPasswordScreenProps {
  handleConfirmPassword: (password: string) => void;
  handlePressBack: () => void;
}

export interface IPersonalDataScreenProps {
  handlePressBack: () => void;
  handleRegisterUser: IPersonalDataSendData;
}
