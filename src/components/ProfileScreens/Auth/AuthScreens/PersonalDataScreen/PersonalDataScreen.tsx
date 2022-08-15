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

const PersonalDataScreen = ({ handlePressBack }: IPersonalDataScreenProps) => {
  return (
    <PageContainer isSafeAreaView={true} paddingTop={0} paddingHorizontal={0}>
      <AuthHeader title="Регистрация" handlePressBack={handlePressBack} />
      <ScrollView style={styles.container}>
        <View style={authStyles.wrapper}>
          <View>
            <PersonalDataFIO />
            <PersonalDataBirthday />
            <PersonalDataPassport />
            <PersonalDataLocation />
            <PersonalDataPhone />
            <PersonalDataFamily />
            <PersonalDataSex />
          </View>
          <TouchableButtonUI
            style={{ ...authStyles.buttonContainer, ...styles.button }}
            text={"Зарегестрироваться"}
          />
          <AuthDescription />
        </View>
      </ScrollView>
    </PageContainer>
  );
};

const styles = uesPersonalDataScreenStyles();
const authStyles = useAuthStyles();

export default React.memo(PersonalDataScreen);
