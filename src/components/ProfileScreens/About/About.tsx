import React from "react";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import AuthHeader from "../Auth/AuthHeader/AuthHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../../screens/types";
import { SCREEN_HEIGHT } from "../../../lib/constants/constants";
import { ScrollView, StyleSheet, View } from "react-native";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";

type Props = NativeStackScreenProps<ProfileStackParams, "About">;

const About = ({ navigation }: Props) => {
  return (
    <PageContainer
      isSafeAreaView={true}
      paddingTop={0}
      height={`${SCREEN_HEIGHT}px`}>
      <AuthHeader
        title="О приложении"
        handlePressBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.textContainer}>
        <View>
          <MontserratTextSC fontWeight={400} style={styles.text}>
            <MontserratTextSC fontWeight={500} style={styles.titleText}>
              {"      "}«Услуги в кармане»
            </MontserratTextSC>{" "}
            – путеводитель социальной помощи для населения Майминского района
            Республики Алтай. Данное приложение создано для того, чтобы жители
            Майминского района могли проще и быстрее получать любые необходимые
            им социальные услуги и меры социальной поддержки.
          </MontserratTextSC>
        </View>
        <View>
          <MontserratTextSC fontWeight={400} style={styles.text}>
            {"      "}Вы можете{" "}
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
        </View>
        <View>
          <MontserratTextSC fontWeight={400} style={styles.text}>
            {"      "} Мобильное приложение «Услуги в кармане» разработано
            digital-студией{" "}
            <MontserratTextSC fontWeight={500}>INDEX</MontserratTextSC> по
            заказу Казенного Учреждения Республики Алтай «Управление социальной
            поддержки населения Майминского района».
          </MontserratTextSC>
        </View>
      </ScrollView>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: SCREEN_HEIGHT - 44,
    paddingTop: 34,
    paddingHorizontal: 27,
  },
  text: {
    textAlign: "justify",
  },
  titleText: {},
});

export default React.memo(About);
