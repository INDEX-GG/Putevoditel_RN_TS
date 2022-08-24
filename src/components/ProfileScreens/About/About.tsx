import React from "react";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import AuthHeader from "../Auth/AuthHeader/AuthHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../../screens/types";
import { IS_IOS, SCREEN_HEIGHT } from "../../../lib/constants/constants";
import {
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import { useHideBottomTab } from "../../../hooks/useHideBottomTab";

type Props = NativeStackScreenProps<ProfileStackParams, "About">;

const About = ({ navigation }: Props) => {
  useHideBottomTab();
  const handlePressIndex = () => {
    Linking.openURL("https://index-studio.ru/");
  };

  return (
    <PageContainer
      isSafeAreaView={true}
      paddingTop={0}
      height={`${SCREEN_HEIGHT}px`}>
      <AuthHeader
        title="О приложении"
        handlePressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <ScrollView style={styles.textContainer}>
          <View>
            <MontserratTextSC fontWeight={400} style={styles.text}>
              <MontserratTextSC fontWeight={500} style={styles.titleText}>
                {"      "}«Услуги в кармане»
              </MontserratTextSC>{" "}
              – путеводитель социальной помощи для населения Майминского района
              Республики Алтай. Данное приложение создано для того, чтобы жители
              Майминского района могли проще и быстрее получать любые
              необходимые им социальные услуги и меры социальной поддержки.
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
              заказу Казенного Учреждения Республики Алтай «Управление
              социальной поддержки населения Майминского района».
            </MontserratTextSC>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.index} onPress={handlePressIndex}>
          <MontserratTextSC fontWeight={600} style={styles.indexText}>
            Разработано студией INDEX
          </MontserratTextSC>
        </TouchableOpacity>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT - 44 - (IS_IOS ? 50 : 0),
    paddingTop: 30,
    paddingHorizontal: 27,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    textAlign: "justify",
  },
  titleText: {},
  index: {
    alignItems: "center",
    marginBottom: IS_IOS ? 30 : 10,
  },
  indexText: {
    color: "#0000EE",
    textDecorationColor: "#0000EE",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});

export default React.memo(About);
