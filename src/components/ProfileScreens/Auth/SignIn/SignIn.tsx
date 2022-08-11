import React from "react";
import PageContainer from "../../../AnyPage/PageContainer/PageContainer";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import AuthHeader from "../AuthHeader/AuthHeader";
import { useSignIn } from "./useSignIn";
import { SignInPropsType } from "./types";

const SignIn = (props: SignInPropsType) => {
  const { authStep, emailValue, passwordValue, handlePressBack } =
    useSignIn(props);
  return (
    <PageContainer
      isSafeAreaView={true}
      backgroundColor={WHITE_COLOR}
      paddingHorizontal={0}
      paddingTop={0}>
      <AuthHeader title="Вход" handlePressBack={handlePressBack} />
    </PageContainer>
  );
};

export default React.memo(SignIn);
