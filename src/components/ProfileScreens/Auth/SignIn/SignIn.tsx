import React from "react";
import PageContainer from "../../../AnyPage/PageContainer/PageContainer";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import AuthHeader from "../AuthHeader/AuthHeader";
import { useSignIn } from "./useSignIn";
import { SignInPropsType } from "./types";
import { useAuthStyles } from "../styles";
import { View } from "react-native";
import TouchableButtonUI from "../../../../UI/TouchableButtonUI/TouchableButtonUI";
import EmailField from "../AuthField/EmailField/EmailField";

const SignIn = (props: SignInPropsType) => {
  const { emailValue, setEmailValue, handleEmailCheck, handlePressBack } =
    useSignIn(props);

  return (
    <PageContainer
      isSafeAreaView={true}
      backgroundColor={WHITE_COLOR}
      paddingHorizontal={0}
      paddingTop={0}>
      <AuthHeader title="Вход" handlePressBack={handlePressBack} />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <EmailField emailValue={emailValue} setEmailValue={setEmailValue} />
          <TouchableButtonUI
            style={styles.buttonContainer}
            text="Продолжить"
            onPress={handleEmailCheck}
          />
        </View>
      </View>
    </PageContainer>
  );
};

const styles = useAuthStyles();

export default React.memo(SignIn);
