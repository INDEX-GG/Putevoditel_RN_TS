import React from "react";
import { StyleSheet, View } from "react-native";
import AuthHeader from "../../AuthHeader/AuthHeader";
import { useAuthStyles } from "../../styles";
import AuthField from "../../AuthField/AuthField";
import { useEmailCodeScreen } from "./useEmailCodeScreen";
import InputCodeUI from "../../../../../UI/InputSC/InputCodeUI/InputCodeUI";
import TouchableButtonUI from "../../../../../UI/TouchableButtonUI/TouchableButtonUI";
import { IEmailCodeScreenProps } from "../types";
import ScreenContainer from "../../../../AnyPage/ScreenContainer/ScreenContainer";

const EmailCodeScreen = ({
  email,
  headerTitle,
  handlePressBack,
  handleChangeEmailToken,
}: IEmailCodeScreenProps) => {
  const { emailCode, isVisibleContent, setEmailCode, handlePressButton } =
    useEmailCodeScreen(email, handleChangeEmailToken);
  return (
    <ScreenContainer>
      <AuthHeader title={headerTitle} handlePressBack={handlePressBack} />
      {isVisibleContent && (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <AuthField
              title="Введите код из письма"
              error={{
                isError: !!emailCode.error,
                errorText: emailCode.error,
              }}>
              <View style={stylesCode.codeContainer}>
                <InputCodeUI
                  error={emailCode.error}
                  handleSetFinalCode={setEmailCode}
                />
              </View>
            </AuthField>
            <TouchableButtonUI
              style={styles.buttonContainer}
              text="Продолжить"
              onPress={handlePressButton}
            />
          </View>
        </View>
      )}
    </ScreenContainer>
  );
};

const stylesCode = StyleSheet.create({
  codeContainer: {
    marginBottom: 22,
  },
});

const styles = useAuthStyles();

export default React.memo(EmailCodeScreen);
