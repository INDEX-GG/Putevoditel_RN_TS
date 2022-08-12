import { StateValueType } from "../types";
import { Dispatch, SetStateAction } from "react";

export interface IEmailScreenProps {
  emailValue: StateValueType;
  setEmailValue: Dispatch<SetStateAction<StateValueType>>;
  handleSubmitEmailCode: () => void;
}

interface IEmailCodeScreenProps {
  handlePressBack: () => void;
}
