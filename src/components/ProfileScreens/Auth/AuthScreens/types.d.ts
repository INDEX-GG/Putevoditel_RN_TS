import { StateValueType } from "../types";
import { Dispatch, SetStateAction } from "react";

export type IEmailChangeFunction = (emailToken: string) => void;

export interface IEmailScreenProps {
  emailValue: StateValueType;
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
}
