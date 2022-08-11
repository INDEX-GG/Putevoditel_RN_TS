import { SignInPropsType } from "./types";
import { useState } from "react";

export const useSignIn = ({ navigation }: SignInPropsType) => {
  const [authStep, setAuthStep] = useState<"email" | "password">("email");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const handlePressBack = () => {
    if (authStep === "email") {
      navigation.goBack();
    }
    if (authStep === "password") {
      setAuthStep("email");
    }
  };

  return {
    authStep,
    emailValue,
    passwordValue,
    handlePressBack,
  };
};
