import React from "react";
import { View } from "react-native";
import PageContainer from "../../../../AnyPage/PageContainer/PageContainer";
import { WHITE_COLOR } from "../../../../../lib/constants/constantsColors";
import AuthHeader from "../../AuthHeader/AuthHeader";
import EmailField from "../../AuthField/EmailField/EmailField";
import TouchableButtonUI from "../../../../../UI/TouchableButtonUI/TouchableButtonUI";
import AuthDescription from "../../AuthDescription/AuthDescription";
import { useAuthStyles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { IEmailScreenProps } from "../types";

const EmailScreen = ({
  emailValue,
  setEmailValue,
  handleSubmitEmailCode,
}: IEmailScreenProps) => {
  const navigation = useNavigation();
  const handlePressBack = () => navigation.goBack();

  return (
    <>
      <PageContainer isSafeAreaView={true} paddingTop={0}>
        <AuthHeader title="Регистрация" handlePressBack={handlePressBack} />
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <EmailField emailValue={emailValue} setEmailValue={setEmailValue} />
            <TouchableButtonUI
              style={styles.buttonContainer}
              text="Продолжить"
              onPress={handleSubmitEmailCode}
            />
            <AuthDescription />
          </View>
        </View>
      </PageContainer>
    </>
  );
};

const styles = useAuthStyles();

export default React.memo(EmailScreen);
