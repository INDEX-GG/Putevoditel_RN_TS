import React from "react";
import { Dimensions, View } from "react-native";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import { LIGHT_YELLOW_COLOR } from "../../../lib/constants/constantsColors";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import { useServicesTextInfoStyles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import ButtonIcon from "../../../assets/icon/GetServicesIcon.svg";

type Props = NativeStackScreenProps<ServicesStackParams, "ServicesTextInfo">;

const ServicesTextInfo = ({ route }: Props) => {
  const { title, description } = route.params;
  const ScreenHeight = Dimensions.get("window").height;
  return (
    <PageContainer
      height={`${ScreenHeight}px`}
      paddingTop={0}
      isSafeAreaView={false}
      backgroundColor={LIGHT_YELLOW_COLOR}>
      <View style={styles.infoContainer}>
        <SafeAreaView>
          <View style={styles.header}>
            <ServicesHeader title={title} paddingLeft={0} />
          </View>
          <DescriptionSC fontWeight={400}>{description}</DescriptionSC>
        </SafeAreaView>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableButtonUI text="Получить услугу" Icon={ButtonIcon} />
        </View>
      </View>
    </PageContainer>
  );
};

const { styles, DescriptionSC } = useServicesTextInfoStyles();

export default React.memo(ServicesTextInfo);
