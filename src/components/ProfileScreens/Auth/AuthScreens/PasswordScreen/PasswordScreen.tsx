import React from "react";
import { View } from "react-native";
import PageContainer from "../../../../AnyPage/PageContainer/PageContainer";
import AuthHeader from "../../AuthHeader/AuthHeader";
import AuthField from "../../AuthField/AuthField";
import { useAuthStyles } from "../../styles";
import TouchableButtonUI from "../../../../../UI/TouchableButtonUI/TouchableButtonUI";
import PasswordField from "../../AuthField/PasswordField/PasswordField";
import { usePasswordScreen } from "./usePasswordScreen";
import { IPasswordScreenProps } from "../types";

const PasswordScreen = ({
  handlePressBack,
  handleConfirmPassword,
}: IPasswordScreenProps) => {
  const {
    error,
    password,
    confirmPassword,
    setPassword,
    handleChangeValidate,
    handleChangeValueInput,
    setConfirmPassword,
    handlePressButton,
  } = usePasswordScreen(handleConfirmPassword);

  return (
    <PageContainer isSafeAreaView={true} paddingTop={0}>
      <AuthHeader title="Регистрация" handlePressBack={handlePressBack} />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <AuthField
            title="Введите пароль"
            error={{ isError: !!error, errorText: error }}>
            <PasswordField
              password={password}
              confirmPassword={confirmPassword}
              handleChangePassword={handleChangeValueInput(setPassword)}
              handleChangeConfirmPassword={handleChangeValueInput(
                setConfirmPassword,
              )}
              setIsValidate={handleChangeValidate}
            />
          </AuthField>
          <TouchableButtonUI
            text="Продолжить"
            style={styles.buttonContainer}
            onPress={handlePressButton}
          />
        </View>
      </View>
    </PageContainer>
  );
};

const styles = useAuthStyles();

export default React.memo(PasswordScreen);