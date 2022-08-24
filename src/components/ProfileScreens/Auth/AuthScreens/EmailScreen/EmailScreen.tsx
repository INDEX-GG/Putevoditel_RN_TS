import React from "react";
import { View } from "react-native";
import PageContainer from "../../../../AnyPage/PageContainer/PageContainer";
import AuthHeader from "../../AuthHeader/AuthHeader";
import EmailField from "../../AuthField/EmailField/EmailField";
import TouchableButtonUI from "../../../../../UI/TouchableButtonUI/TouchableButtonUI";
import AuthDescription from "../../AuthDescription/AuthDescription";
import { useAuthStyles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { IEmailScreenProps } from "../types";
import { PADDING_TOP_HEADER } from "../../../../../lib/constants/constants";

const EmailScreen = ({
  emailValue,
  setEmailValue,
  isVisibleDescription = true,
  handleSubmitEmailCode,
}: IEmailScreenProps) => {
  const navigation = useNavigation();
  const handlePressBack = () => navigation.goBack();

  return (
    <PageContainer isSafeAreaView={true} paddingTop={PADDING_TOP_HEADER}>
      <AuthHeader title="Вход" handlePressBack={handlePressBack} />
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
    </PageContainer>
  );
};

const styles = useAuthStyles();

export default React.memo(EmailScreen);
