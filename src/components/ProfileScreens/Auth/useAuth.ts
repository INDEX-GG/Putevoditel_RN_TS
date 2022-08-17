import { StateValueType } from "./types";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Dispatch, SetStateAction } from "react";
import { checkEmailValid } from "../../../lib/services/services";
import { validatePasswordRegExp } from "../../../lib/services/regExp";

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

  const handleChangePasswordInput = (
    setState: Dispatch<SetStateAction<string>>,
  ) => {
    return (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const value = e.nativeEvent.text;
      if (value.length < 30) {
        const isValidPassword = !!value.match(
          new RegExp(validatePasswordRegExp),
        );
        if (isValidPassword) {
          setState(e.nativeEvent.text);
        }
        if (!value) setState("");
      }
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
    handleChangePasswordInput,
    handleChangeInputValue,
  };
};
