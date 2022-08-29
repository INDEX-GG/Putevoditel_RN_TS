import React from "react";
import AuthHeader from "../Auth/AuthHeader/AuthHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../../screens/types";
import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";

type Props = NativeStackScreenProps<ProfileStackParams, "About">;

const About = ({ navigation }: Props) => {
  // useHideBottomTab();
  const handlePressIndex = () => {
    Linking.openURL("https://index-studio.ru/");
  };

  return (
    <ScreenContainer
      isSafeAreaView={true}
      isScroll={true}
      scrollViewProps={{ stickyHeaderIndices: [0], style: styles.container }}>
      <AuthHeader
        title="О приложении"
        handlePressBack={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <View style={styles.textContainer}>
          <MontserratTextSC fontWeight={400} style={styles.text}>
            <MontserratTextSC fontWeight={500} style={styles.titleText}>
              {"\t"}«Услуги в кармане»
            </MontserratTextSC>{" "}
            – путеводитель социальной помощи для населения Майминского района
            Республики Алтай. Данное приложение создано для того, чтобы жители
            Майминского района могли проще и быстрее получать любые необходимые
            им социальные услуги и меры социальной поддержки.
          </MontserratTextSC>
          <MontserratTextSC fontWeight={400} style={styles.text}>
            {"\t"}Вы можете{" "}
            <MontserratTextSC fontWeight={500}>найти</MontserratTextSC> и
            подобрать для себя любую социальную услугу или меру социальной
            поддержки за счёт интуитивно понятной навигации приложения и
            удобного поиска. В приложении содержатся все необходимые сведения
            для получения той или иной услуги: способы подачи заявлений,
            контакты и адреса мест приёма заявлений, а также требуемые пакеты
            документов для получения услуг. Функция предзаполнения заявлений
            позволит легко получить желаемую социальную услугу или меру
            социальной поддержки.
          </MontserratTextSC>
          <MontserratTextSC fontWeight={400} style={styles.text}>
            {"\t"}Мобильное приложение «Услуги в кармане» разработано
            digital-студией{" "}
            <MontserratTextSC fontWeight={500}>INDEX</MontserratTextSC> по
            заказу Казенного Учреждения Республики Алтай «Управление социальной
            поддержки населения Майминского района».
          </MontserratTextSC>
        </View>
        <TouchableOpacity style={styles.index} onPress={handlePressIndex}>
          <MontserratTextSC fontWeight={600} style={styles.indexText}>
            Разработано студией INDEX
          </MontserratTextSC>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  wrapper: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 27,
  },
  textContainer: {
    flex: 1,
    marginBottom: 10,
  },
  text: {
    textAlign: "justify",
  },
  titleText: {},
  index: {
    alignItems: "center",
    marginBottom: 20,
  },
  indexText: {
    color: "#0000EE",
    textDecorationColor: "#0000EE",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});

export default React.memo(About);
