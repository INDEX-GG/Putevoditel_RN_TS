import React from "react";
import PageContainer from "../../../../AnyPage/PageContainer/PageContainer";
import AuthHeader from "../../AuthHeader/AuthHeader";
import { IPersonalDataScreenProps } from "../types";
import { useAuthStyles } from "../../styles";
import { ScrollView, View } from "react-native";
import TouchableButtonUI from "../../../../../UI/TouchableButtonUI/TouchableButtonUI";
import AuthDescription from "../../AuthDescription/AuthDescription";
import PersonalDataFIO from "./PersonalDataFIO/PersonalDataFIO";
import { uesPersonalDataScreenStyles } from "./styles";
import PersonalDataBirthday from "./PersonalDataBirthday/PersonalDataBirthday";
import PersonalDataPassport from "./PersonalDataPassport/PersonalDataPassport";
import PersonalDataLocation from "./PersonalDataLocation/PersonalDataLocation";
import PersonalDataPhone from "./PersonalDataPhone/PersonalDataPhone";
import PersonalDataFamily from "./PersonalDataFamily/PersonalDataFamily";
import PersonalDataSex from "./PersonalDataSex/PersonalDataSex";
import { usePersonalDataScreen } from "./usePersonalDataScreen";
import { useAuthFieldStyles } from "../../AuthField/style";

const PersonalDataScreen = ({
  isEdit = false,
  handlePressBack,
  handleRegisterUser,
}: IPersonalDataScreenProps) => {
  const {
    error,
    isSubmit,
    handleSubmitPersonalData,
    personalDataSexProps,
    personalDataFIOProps,
    personalDataPhoneProps,
    personalDataFamilyProps,
    personalDataPassportProps,
    personalDataBirthdayProps,
    personalDataLocationProps,
  } = usePersonalDataScreen(handleRegisterUser, isEdit);

  return (
    <PageContainer isSafeAreaView={true} paddingTop={0} paddingHorizontal={0}>
      <AuthHeader
        title={isEdit ? "Редактировать профиль" : "Регистрация"}
        handlePressBack={handlePressBack}
      />
      <ScrollView style={styles.container}>
        <View style={authStyles.wrapper}>
          <View>
            <PersonalDataFIO {...personalDataFIOProps} />
            <PersonalDataBirthday {...personalDataBirthdayProps} />
            <PersonalDataPassport {...personalDataPassportProps} />
            <PersonalDataLocation {...personalDataLocationProps} />
            <PersonalDataPhone {...personalDataPhoneProps} />
            <PersonalDataFamily {...personalDataFamilyProps} />
            <PersonalDataSex {...personalDataSexProps} />
          </View>
          <FieldErrorSC fontWeight={500}>{isSubmit ? error : " "}</FieldErrorSC>
          <TouchableButtonUI
            onPress={handleSubmitPersonalData}
            style={{
              ...authStyles.buttonContainer,
              ...styles.button,
            }}
            text={isEdit ? "Сохранить изменения" : "Зарегестрироваться"}
          />
          {!isEdit && <AuthDescription />}
        </View>
      </ScrollView>
    </PageContainer>
  );
};

const styles = uesPersonalDataScreenStyles();
const authStyles = useAuthStyles();
const { FieldErrorSC } = useAuthFieldStyles();

export default React.memo(PersonalDataScreen);
