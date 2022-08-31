import React from "react";
import { ScrollView, View } from "react-native";
import { SECONDARY_COLOR } from "../../../../lib/constants/constantsColors";
import RalewayTextSC from "../../../../UI/RalewayTextSC/RalewayTextSC";
import Logo from "../../../../assets/icon/Logo.svg";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import TouchableButtonUI from "../../../../UI/TouchableButtonUI/TouchableButtonUI";
import { useUserNotAuthStyles } from "./styles";
import AboutApp from "../../../AnyPage/AboutApp/AboutApp";
import ScreenContainer from "../../../AnyPage/ScreenContainer/ScreenContainer";

interface IUserNotAuthProps {
  handlePressSignIn: () => void;
  handlePressSignUp: () => void;
}

const UserNotAuth = ({
  handlePressSignIn,
  handlePressSignUp,
}: IUserNotAuthProps) => {
  const styles = useUserNotAuthStyles();
  return (
    <ScreenContainer
      backgroundColor={SECONDARY_COLOR}
      isScroll={false}
      isSafeAreaView={true}
      viewProp={{ style: styles.container }}>
      <View style={styles.titleContainer}>
        <RalewayTextSC style={styles.title}>Личный кабинет</RalewayTextSC>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContentContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.contentWrapper}>
            <View style={styles.emptyItem} />
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
    </ScreenContainer>
  );
};

export default React.memo(UserNotAuth);
