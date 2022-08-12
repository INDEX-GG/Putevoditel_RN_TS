import React from "react";
import { useSignUp } from "./useSignUp";
import EmailScreen from "../AuthScreens/EmailScreen/EmailScreen";
import EmailCodeScreen from "../AuthScreens/EmailCodeScreen/EmailCodeScreen";

const SignUp = () => {
  const {
    emailValue,
    emailComponentProps,
    emailCodeComponentProps,
    signUpStep,
  } = useSignUp();
  switch (signUpStep) {
    case "email":
      return <EmailScreen {...emailComponentProps} />;
    case "email-code":
      return (
        <EmailCodeScreen
          {...emailCodeComponentProps}
          email={emailValue.value}
        />
      );
    default:
      return null;
  }
};

export default React.memo(SignUp);
