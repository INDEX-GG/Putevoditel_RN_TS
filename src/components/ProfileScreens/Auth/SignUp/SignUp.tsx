import React from "react";
import { Text, View } from "react-native";
import PageContainer from "../../../AnyPage/PageContainer/PageContainer";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import AuthHeader from "../AuthHeader/AuthHeader";
import { useSignUp } from "./useSignUp";
import { useAuthStyles } from "../styles";
import AuthField from "../AuthField/AuthField";
import { useAuth } from "../useAuth";
import TouchableButtonUI from "../../../../UI/TouchableButtonUI/TouchableButtonUI";

const SignUp = () => {
  const { handlePressBack, emailValue, setEmailValue } = useSignUp();
  const { handleChangeInputValue } = useAuth();
  return (
    <PageContainer
      isSafeAreaView={true}
      backgroundColor={WHITE_COLOR}
      paddingHorizontal={0}
      paddingTop={0}>
      <AuthHeader title="Регистрация" handlePressBack={handlePressBack} />
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
            onPress={() => console.log(123)}
          />
        </View>
      </View>
    </PageContainer>
  );
};

const styles = useAuthStyles();

export default React.memo(SignUp);
