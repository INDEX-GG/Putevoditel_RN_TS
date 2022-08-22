import React from "react";
import { ScrollView, Text, View } from "react-native";
import PageContainer from "../../../AnyPage/PageContainer/PageContainer";
import { SECONDARY_COLOR } from "../../../../lib/constants/constantsColors";
import RalewayTextSC from "../../../../UI/RalewayTextSC/RalewayTextSC";
import Logo from "../../../../assets/icon/Logo.svg";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import TouchableButtonUI from "../../../../UI/TouchableButtonUI/TouchableButtonUI";
import { useUserNotAuthStyles } from "./styles";
import AboutApp from "../../../AnyPage/AboutApp/AboutApp";

interface IUserNotAuthProps {
  handlePressSignIn: () => void;
  handlePressSignUp: () => void;
}

const UserNotAuth = ({
  handlePressSignIn,
  handlePressSignUp,
}: IUserNotAuthProps) => {
  return (
    <PageContainer isSafeAreaView={true} backgroundColor={SECONDARY_COLOR}>
      <View style={styles.titleContainer}>
        <RalewayTextSC style={styles.title}>Личный кабинет</RalewayTextSC>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.contentWrapper}>
            <View style={styles.infoContainer}>
              <View style={styles.logoContainer}>
                <Logo />
              </View>
              <MontserratTextSC style={styles.description} fontWeight={400}>
                Чтобы пользоваться всеми функциями приложения вам необходимо{" "}
                <MontserratTextSC
                  style={styles.descriptionSpan}
                  fontWeight={400}>
                  войти или зарегистрироваться
                </MontserratTextSC>
              </MontserratTextSC>
              <TouchableButtonUI
                text="Войти"
                style={styles.buttonStyle}
                onPress={handlePressSignIn}
              />
              <TouchableButtonUI
                text="Зарегестрироваться"
                style={styles.buttonStyle}
                onPress={handlePressSignUp}
              />
            </View>
            <View style={styles.aboutApp}>
              <AboutApp />
            </View>
          </View>
        </ScrollView>
      </View>
    </PageContainer>
  );
};

const styles = useUserNotAuthStyles();

export default React.memo(UserNotAuth);
