import React from "react";
import PageContainer from "../../../AnyPage/PageContainer/PageContainer";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import AuthHeader from "../AuthHeader/AuthHeader";
import { useSignIn } from "./useSignIn";
import { SignInPropsType } from "./types";
import AuthField from "../AuthField/AuthField";
import { useAuthStyles } from "../styles";
import { View } from "react-native";
import TouchableButtonUI from "../../../../UI/TouchableButtonUI/TouchableButtonUI";
import { useAuth } from "../useAuth";

const SignIn = (props: SignInPropsType) => {
  const { emailValue, setEmailValue, handleEmailSend, handlePressBack } =
    useSignIn(props);
  const { handleChangeInputValue } = useAuth();

  return (
    <PageContainer
      isSafeAreaView={true}
      backgroundColor={WHITE_COLOR}
      paddingHorizontal={0}
      paddingTop={0}>
      <AuthHeader title="Вход" handlePressBack={handlePressBack} />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <AuthField
            title="Введите свой E-mail"
            textInputProps={{
              value: emailValue.value,
              onChange: handleChangeInputValue(setEmailValue),
              placeholder: "Электронная почта",
            }}
            error={{
              isError: !!emailValue.error,
              errorText: emailValue.error,
            }}
          />
          <TouchableButtonUI
            style={styles.buttonContainer}
            text="Продолжить"
            onPress={handleEmailSend}
          />
        </View>
      </View>
    </PageContainer>
  );
};

const styles = useAuthStyles();

export default React.memo(SignIn);
