import { SignInPropsType } from "./types";
import { useMemo, useState } from "react";
import { StateValueType } from "../types";
import { useUserStore } from "../../../../hooks/useUserStore";
import { useAuth } from "../useAuth";
import {
  IEmailScreenProps,
  IPasswordLoginScreenProps,
} from "../AuthScreens/types";

export const useSignIn = ({ navigation }: SignInPropsType) => {
  const { handleSubmitEmail } = useAuth();
  const { handleCheckRegistration, handleLoginUser } = useUserStore();

  const [signInStep, setSignInStep] = useState<"email" | "password">("email");
  const [emailValue, setEmailValue] = useState<StateValueType>({
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

  //! Email step (start)
  const handleCheckUserEmailSuccess = () => {
    setSignInStep("password");
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

  const emailScreenProps = useMemo(
    () =>
      ({
        emailValue,
        isVisibleDescription: false,
        setEmailValue: setEmailValue,
        handleSubmitEmailCode: handleEmailCheck,
      } as IEmailScreenProps),
    [emailValue],
  );

  //! Email step (end)

  //! Password step (start)
  const handleFulfilledLogin = () => {
    navigation.navigate("Profile");
  };

  const handleSubmitData = (
    password: string,
    rejectCallback: (message?: string) => void,
  ) => {
    handleLoginUser({
      email: emailValue.value,
      password,
      fulfilledCallback: handleFulfilledLogin,
      rejectCallback: rejectCallback,
    });
  };

  const passwordLoginScreenProps = {
    handlePressBack,
    handleSubmitData,
  } as IPasswordLoginScreenProps;

  //! Password step (end)

  return {
    signInStep,
    emailScreenProps,
    passwordLoginScreenProps,
  };
};
