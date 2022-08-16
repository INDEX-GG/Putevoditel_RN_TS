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

interface IPasswordLoginScreenProps {
  handleSubmitData: (password: string) => () => void;
}

const PasswordLoginScreen = ({
  handleSubmitData,
}: IPasswordLoginScreenProps) => {
  const { password, navigate, setPassword, handleChangePasswordInput } =
    usePasswordLoginScreen();
  return (
    <PageContainer isSafeAreaView={true} paddingTop={0}>
      <View style={authStyles.container}>
        <View style={authStyles.wrapper}>
          <AuthField title="Введите пароль">
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
            onPress={() => navigate("ResetPassword")}>
            <MontserratTextSC style={styles.resetButton} fontWeight={600}>
              Забыли пароль?
            </MontserratTextSC>
          </TouchableOpacity>
          <TouchableButtonUI
            style={authStyles.buttonContainer}
            text="Войти"
            onPress={handleSubmitData(password)}
          />
        </View>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  resetContainer: {
    marginBottom: 20,
    marginLeft: 120,
  },
  resetButton: {
    color: GRAY_COLOR_41,
  },
});
const authStyles = useAuthStyles();

export default React.memo(PasswordLoginScreen);
