import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PageContainer from "../../../../AnyPage/PageContainer/PageContainer";
import { useAuthStyles } from "../../styles";
import AuthField from "../../AuthField/AuthField";
import InputPasswordUI from "../../../../../UI/InputSC/InputPasswordUI/InputPassword";
import { usePasswordLoginScreen } from "./usePasswordLoginScreen";
import TouchableButtonUI from "../../../../../UI/TouchableButtonUI/TouchableButtonUI";
import MontserratTextSC from "../../../../../UI/MontserratTextSC/MontserratTextSC";
import { GRAY_COLOR_41 } from "../../../../../lib/constants/constantsColors";
import AuthHeader from "../../AuthHeader/AuthHeader";
import { IPasswordLoginScreenProps } from "../types";
import { PADDING_TOP_HEADER } from "../../../../../lib/constants/constants";

const PasswordLoginScreen = ({
  email,
  handlePressBack,
  handleSubmitData,
}: IPasswordLoginScreenProps) => {
  const {
    error,
    password,
    handleSubmit,
    setPassword,
    handleChangePasswordInput,
    handlePressReset,
  } = usePasswordLoginScreen(handleSubmitData, email);
  return (
    <PageContainer isSafeAreaView={true} paddingTop={PADDING_TOP_HEADER}>
      <AuthHeader title="Вход" handlePressBack={handlePressBack} />
      <View style={authStyles.container}>
        <View style={authStyles.wrapper}>
          <AuthField
            title="Введите пароль"
            error={{ isError: !!error, errorText: error }}>
            <InputPasswordUI
              inputProps={{
                placeholder: "Пароль",
                value: password,
                onChange: handleChangePasswordInput(setPassword),
              }}
            />
          </AuthField>
          <TouchableOpacity
            style={styles.resetContainer}
            onPress={handlePressReset}>
            <MontserratTextSC style={styles.resetButton} fontWeight={600}>
              Забыли пароль?
            </MontserratTextSC>
          </TouchableOpacity>
          <TouchableButtonUI
            style={authStyles.buttonContainer}
            text="Войти"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  resetContainer: {
    marginBottom: 41,
    marginLeft: 120,
  },
  resetButton: {
    color: GRAY_COLOR_41,
  },
});
const authStyles = useAuthStyles();

export default React.memo(PasswordLoginScreen);
