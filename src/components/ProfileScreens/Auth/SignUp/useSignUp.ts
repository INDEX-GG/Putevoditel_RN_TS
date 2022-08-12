import { useMemo, useState } from "react";
import { StateValueType } from "../types";
import { useUserStore } from "../../../../hooks/useUserStore";
import { useAuth } from "../useAuth";
import { useModalStore } from "../../../../hooks/useModalStore";
import { IEmailCodeScreenProps, IEmailScreenProps } from "../AuthScreens/types";

type SignUpStep = "email" | "email-code";

export const useSignUp = () => {
  const { handleSendEmailCode } = useUserStore();
  const { handleSetError, handleSubmitEmail } = useAuth();
  const [signUpStep, setSignUpStep] = useState<SignUpStep>("email");

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

  const emailCodeComponentProps = useMemo(
    () =>
      ({
        handlePressBack: handlePressBackEmailCode,
      } as IEmailCodeScreenProps),
    [],
  );

  //! EmailCode step (end)

  return {
    signUpStep,
    emailValue,
    emailComponentProps,
    emailCodeComponentProps,
  };
};
