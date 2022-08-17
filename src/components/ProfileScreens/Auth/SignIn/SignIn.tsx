import React from "react";
import { useSignIn } from "./useSignIn";
import { SignInPropsType } from "./types";
import { useAuthStyles } from "../styles";
import EmailScreen from "../AuthScreens/EmailScreen/EmailScreen";
import PasswordLoginScreen from "../AuthScreens/PasswordLoginScreen/PasswordLoginScreen";

const SignIn = (props: SignInPropsType) => {
  const { signInStep, emailScreenProps, passwordLoginScreenProps } =
    useSignIn(props);

  switch (signInStep) {
    case "email":
      return <EmailScreen {...emailScreenProps} />;
    case "password":
      return <PasswordLoginScreen {...passwordLoginScreenProps} />;
  }
};

const styles = useAuthStyles();

export default React.memo(SignIn);
