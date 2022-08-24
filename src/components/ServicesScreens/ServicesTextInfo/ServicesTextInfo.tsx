import React from "react";
import { ScrollView, View } from "react-native";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import { LIGHT_YELLOW_COLOR } from "../../../lib/constants/constantsColors";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import { useServicesTextInfoStyles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import ButtonIcon from "../../../assets/icon/GetServicesIcon.svg";
import { SCREEN_HEIGHT } from "../../../lib/constants/constants";
import { ISpecialistModel } from "../../../lib/models/ISpecialistData";
import { useHideBottomTab } from "../../../hooks/useHideBottomTab";

type Props = NativeStackScreenProps<ServicesStackParams, "ServicesTextInfo">;

const ServicesTextInfo = ({ navigation, route }: Props) => {
  const { title, description, specialistData } = route.params;
  const handlePressButton = () => {
    navigation.navigate(
      "ServicesSpecialists",
      specialistData as ISpecialistModel,
    );
  };

  useHideBottomTab();

  return (
    <PageContainer
      height={`${SCREEN_HEIGHT}px`}
      paddingTop={0}
      isSafeAreaView={false}
      backgroundColor={LIGHT_YELLOW_COLOR}>
      <View style={styles.infoContainer}>
        <SafeAreaView>
          <ScrollView stickyHeaderIndices={[0]} style={styles.scrollContainer}>
            <View style={styles.header}>
              <ServicesHeader title={title} paddingLeft={0} />
            </View>
            <DescriptionSC fontWeight={400}>{description}</DescriptionSC>
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          {specialistData && (
            <TouchableButtonUI
              text="Получить услугу"
              Icon={ButtonIcon}
              onPress={handlePressButton}
            />
          )}
        </View>
      </View>
    </PageContainer>
  );
};

const { styles, DescriptionSC } = useServicesTextInfoStyles();

export default React.memo(ServicesTextInfo);
