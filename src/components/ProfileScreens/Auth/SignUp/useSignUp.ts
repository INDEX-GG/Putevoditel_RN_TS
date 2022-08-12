import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StateValueType } from "../types";

export const useSignUp = () => {
  const [signUpStep, setSignUpStep] = useState<"email">("email");
  const [emailValue, setEmailValue] = useState<StateValueType>({
    value: "",
    error: "",
  });
  const navigation = useNavigation();
  const handlePressBack = () => {
    if (signUpStep === "email") {
      navigation.goBack();
    }
  };
  return { signUpStep, emailValue, setEmailValue, handlePressBack };
};
