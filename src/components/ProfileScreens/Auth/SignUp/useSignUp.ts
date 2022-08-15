import { useMemo, useState } from "react";
import { StateValueType } from "../types";
import { useUserStore } from "../../../../hooks/useUserStore";
import { useAuth } from "../useAuth";
import {
  IEmailCodeScreenProps,
  IEmailScreenProps,
  IPasswordScreenProps,
  IPersonalDataScreenProps,
} from "../AuthScreens/types";

type SignUpStep = "email" | "email-code" | "password" | "personal-data";

export const useSignUp = () => {
  const { handleSendEmailCode } = useUserStore();
  const { handleSetError, handleSubmitEmail } = useAuth();
  const [signUpStep, setSignUpStep] = useState<SignUpStep>("personal-data");
  const [emailToken, setEmailToken] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //! Email - step (start)
  const [emailValue, setEmailValue] = useState<StateValueType>({
    value: "",
    error: "",
  });

  const handleSubmitEmailFulfilled = () => {
    setSignUpStep("email-code");
  };

  const handleSubmitEmailReject = (message?: string) => {
    if (message) {
      handleSetError(setEmailValue, message);
    }
  };

  const handleSubmitEmailCode = () => {
    const email = emailValue.value;
    handleSubmitEmail(emailValue, setEmailValue, () =>
      handleSendEmailCode({
        email,
        fulfilledCallback: handleSubmitEmailFulfilled,
        rejectCallback: handleSubmitEmailReject,
      }),
    );
  };

  const emailComponentProps = useMemo(
    () =>
      ({
        emailValue: emailValue,
        setEmailValue: setEmailValue,
        handleSubmitEmailCode: handleSubmitEmailCode,
      } as IEmailScreenProps),
    [emailValue],
  );
  //! Email step (end)

  //! EmailCode step (start)
  const handlePressBackEmailCode = () => {
    setSignUpStep("email");
  };

  const handleChangeEmailToken = (token: string) => {
    if (token) {
      setEmailToken(token);
      setSignUpStep("password");
    }
  };

  const emailCodeComponentProps = useMemo(
    () =>
      ({
        email: emailValue.value,
        handlePressBack: handlePressBackEmailCode,
        handleChangeEmailToken: handleChangeEmailToken,
      } as IEmailCodeScreenProps),
    [emailValue.value],
  );
  //! EmailCode step (end)

  //! Password step (start)
  const handlePressBackPassword = () => {
    setSignUpStep("email");
    setPassword("");
  };

  const handleChangePassword = (newPassword: string) => {
    setPassword(newPassword);
    setSignUpStep("personal-data");
  };

  const passwordComponentProps = useMemo(
    () =>
      ({
        handlePressBack: handlePressBackPassword,
        handleConfirmPassword: handleChangePassword,
      } as IPasswordScreenProps),
    [emailValue.value],
  );

  //! Password step (end)

  //! Personal-data step (start)
  const handlePressBackPersonalData = () => {
    setSignUpStep("password");
  };

  const personalDataComponentProps = {
    handlePressBack: handlePressBackPersonalData,
  } as IPersonalDataScreenProps;
  //! Personal-data step (end)
  return {
    emailToken,
    signUpStep,
    emailValue,
    emailComponentProps,
    passwordComponentProps,
    emailCodeComponentProps,
    personalDataComponentProps,
  };
};
