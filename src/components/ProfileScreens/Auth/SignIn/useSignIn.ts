import { SignInPropsType } from "./types";
import { useState } from "react";
import { StateValueType } from "../types";
import { useUserStore } from "../../../../hooks/useUserStore";

export const useSignIn = ({ navigation }: SignInPropsType) => {
  const [signInStep, setSignInStep] = useState<"email" | "password">("email");
  const [emailValue, setEmailValue] = useState<StateValueType>({
    value: "",
    error: "",
  });
  const [passwordValue, setPasswordValue] = useState<StateValueType>({
    value: "",
    error: "",
  });
  const { handleCheckRegistration } = useUserStore();

  const handlePressBack = () => {
    if (signInStep === "email") {
      navigation.goBack();
    }
    if (signInStep === "password") {
      setSignInStep("email");
    }
  };

  const handleCheckUserEmailSuccess = () => {
    console.log(123);
  };

  const handleCheckUserEmailReject = () => {
    setEmailValue({ value: emailValue.value, error: "E-mail не найден" });
  };

  const handleEmailSend = () => {
    if (emailValue.value) {
      handleCheckRegistration({
        email: emailValue.value,
        fulfilledCallback: handleCheckUserEmailSuccess,
        rejectCallback: handleCheckUserEmailReject,
      });
      return;
    }
    setEmailValue((prevState) => ({
      value: prevState.value,
      error: "Заполните почту",
    }));
  };

  return {
    signInStep,
    emailValue,
    setEmailValue,
    passwordValue,
    handlePressBack,
    handleEmailSend,
    setPasswordValue,
    handleCheckUserEmailReject,
    handleCheckUserEmailSuccess,
  };
};
