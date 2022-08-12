import { SignInPropsType } from "./types";
import { useState } from "react";
import { StateValueType } from "../types";
import { useUserStore } from "../../../../hooks/useUserStore";
import { useAuth } from "../useAuth";

export const useSignIn = ({ navigation }: SignInPropsType) => {
  const { handleSubmitEmail } = useAuth();
  const { handleCheckRegistration } = useUserStore();

  const [signInStep, setSignInStep] = useState<"email" | "password">("email");
  const [emailValue, setEmailValue] = useState<StateValueType>({
    value: "",
    error: "",
  });
  const [passwordValue, setPasswordValue] = useState<StateValueType>({
    value: "",
    error: "",
  });

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

  const handleEmailCheck = () => {
    handleSubmitEmail(emailValue, setEmailValue, () =>
      handleCheckRegistration({
        email: emailValue.value,
        fulfilledCallback: handleCheckUserEmailSuccess,
        rejectCallback: handleCheckUserEmailReject,
      }),
    );
  };

  return {
    signInStep,
    emailValue,
    setEmailValue,
    passwordValue,
    handlePressBack,
    handleEmailCheck,
    setPasswordValue,
    handleCheckUserEmailReject,
    handleCheckUserEmailSuccess,
  };
};
