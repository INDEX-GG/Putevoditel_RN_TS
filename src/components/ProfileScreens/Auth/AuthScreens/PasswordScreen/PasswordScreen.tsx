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
import { PADDING_TOP_HEADER } from "../../../../../lib/constants/constants";

const PasswordScreen = ({
  headerTitle,
  defaultPassword,
  handlePressBack,
  handleConfirmPassword,
}: IPasswordScreenProps) => {
  const {
    error,
    password,
    confirmPassword,
    setPassword,
    handleChangeValidate,
    handleChangePasswordInput,
    setConfirmPassword,
    handlePressButton,
  } = usePasswordScreen(handleConfirmPassword, defaultPassword);

  return (
    <PageContainer isSafeAreaView={true} paddingTop={PADDING_TOP_HEADER}>
      <AuthHeader title={headerTitle} handlePressBack={handlePressBack} />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <AuthField
            title="Введите пароль"
            error={{ isError: !!error, errorText: error }}>
            <PasswordField
              password={password}
              confirmPassword={confirmPassword}
              handleChangePassword={handleChangePasswordInput(setPassword)}
              handleChangeConfirmPassword={handleChangePasswordInput(
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
