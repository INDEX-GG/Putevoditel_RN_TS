import { StateValueType } from "./types";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Dispatch, SetStateAction } from "react";
import { checkEmailValid } from "../../../lib/services/services";

export const useAuth = () => {
  const handleChangeInputValue = (
    setState: Dispatch<SetStateAction<StateValueType>>,
  ) => {
    return (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setState({
        value: e.nativeEvent?.text || "",
        error: "",
      });
    };
  };

  const handleSetError = (
    setState: Dispatch<SetStateAction<StateValueType>>,
    message: string,
  ) => {
    setState((prevState) => ({
      value: prevState.value,
      error: message,
    }));
  };

  const handleSubmitEmail = (
    emailValue: StateValueType,
    setEmailValue: Dispatch<SetStateAction<StateValueType>>,
    successCallback: () => void,
  ) => {
    const email = emailValue.value;
    if (!email) {
      handleSetError(setEmailValue, "Зполните почту");
      return;
    }
    if (checkEmailValid(email)) {
      successCallback();
      return;
    }
    handleSetError(setEmailValue, "Введите корректный email");
  };

  return {
    handleSetError,
    handleSubmitEmail,
    handleChangeInputValue,
  };
};
