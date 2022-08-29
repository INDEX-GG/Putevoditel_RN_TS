import React from "react";
import { View } from "react-native";
import AuthHeader from "../../AuthHeader/AuthHeader";
import EmailField from "../../AuthField/EmailField/EmailField";
import TouchableButtonUI from "../../../../../UI/TouchableButtonUI/TouchableButtonUI";
import AuthDescription from "../../AuthDescription/AuthDescription";
import { useAuthStyles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { IEmailScreenProps } from "../types";
import ScreenContainer from "../../../../AnyPage/ScreenContainer/ScreenContainer";

const EmailScreen = ({
  title,
  emailValue,
  setEmailValue,
  isVisibleDescription = true,
  handleSubmitEmailCode,
}: IEmailScreenProps) => {
  const navigation = useNavigation();
  const handlePressBack = () => navigation.goBack();

  return (
    <ScreenContainer>
      <AuthHeader title={title} handlePressBack={handlePressBack} />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <EmailField emailValue={emailValue} setEmailValue={setEmailValue} />
          <TouchableButtonUI
            style={styles.buttonContainer}
            text="Продолжить"
            onPress={handleSubmitEmailCode}
          />
          {isVisibleDescription && <AuthDescription />}
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = useAuthStyles();

export default React.memo(EmailScreen);
