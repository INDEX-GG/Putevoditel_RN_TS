import React from "react";
import PageContainer from "../../../AnyPage/PageContainer/PageContainer";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import AuthHeader from "../AuthHeader/AuthHeader";
import { useSignIn } from "./useSignIn";
import { SignInPropsType } from "./types";
import { useAuthStyles } from "../styles";
import EmailScreen from "../AuthScreens/EmailScreen/EmailScreen";
import PasswordLoginScreen from "../AuthScreens/PasswordLoginScreen/PasswordLoginScreen";

const SignIn = (props: SignInPropsType) => {
  const {
    signInStep,
    handleSubmitData,
    emailValue,
    setEmailValue,
    handleEmailCheck,
  } = useSignIn(props);

  switch (signInStep) {
    case "email":
      return (
        <EmailScreen
          emailValue={emailValue}
          isVisibleDescription={false}
          setEmailValue={setEmailValue}
          handleSubmitEmailCode={handleEmailCheck}
        />
      );
    case "password":
      return <PasswordLoginScreen handleSubmitData={handleSubmitData} />;
  }
};

const styles = useAuthStyles();

export default React.memo(SignIn);
