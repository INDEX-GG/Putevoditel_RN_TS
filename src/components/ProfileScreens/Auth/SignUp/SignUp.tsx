import React from "react";
import { useSignUp } from "./useSignUp";
import EmailScreen from "../AuthScreens/EmailScreen/EmailScreen";
import EmailCodeScreen from "../AuthScreens/EmailCodeScreen/EmailCodeScreen";
import PasswordScreen from "../AuthScreens/PasswordScreen/PasswordScreen";
import PersonalDataScreen from "../AuthScreens/PersonalDataScreen/PersonalDataScreen";
import { useChangeBottomTab } from "../../../../hooks/useChangeBottomTab";
import { useLayout } from "../../../../hooks/useLayout";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";

const SignUp = () => {
  useLayout({ newHeight: 100, newBackground: WHITE_COLOR });
  useChangeBottomTab({ isView: true });
  const {
    signUpStep,
    emailComponentProps,
    emailCodeComponentProps,
    passwordComponentProps,
    personalDataComponentProps,
  } = useSignUp();
  switch (signUpStep) {
    case "email":
      return <EmailScreen {...emailComponentProps} />;
    case "email-code":
      return <EmailCodeScreen {...emailCodeComponentProps} />;
    case "password":
      return <PasswordScreen {...passwordComponentProps} />;
    case "personal-data":
      return <PersonalDataScreen {...personalDataComponentProps} />;
    default:
      return null;
  }
};

export default React.memo(SignUp);
