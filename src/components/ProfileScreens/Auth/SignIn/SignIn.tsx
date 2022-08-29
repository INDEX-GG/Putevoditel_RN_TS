import React from "react";
import { useSignIn } from "./useSignIn";
import { SignInPropsType } from "./types";
import EmailScreen from "../AuthScreens/EmailScreen/EmailScreen";
import PasswordLoginScreen from "../AuthScreens/PasswordLoginScreen/PasswordLoginScreen";
import { useChangeBottomTab } from "../../../../hooks/useChangeBottomTab";

const SignIn = (props: SignInPropsType) => {
  useChangeBottomTab({ isView: true });
  const { signInStep, emailScreenProps, passwordLoginScreenProps } =
    useSignIn(props);

  switch (signInStep) {
    case "email":
      return <EmailScreen {...emailScreenProps} />;
    case "password":
      return <PasswordLoginScreen {...passwordLoginScreenProps} />;
  }
};

export default React.memo(SignIn);
