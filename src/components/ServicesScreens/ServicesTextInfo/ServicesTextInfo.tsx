import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import { useServicesTextInfoStyles } from "./style";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import ButtonIcon from "../../../assets/icon/GetServicesIcon.svg";
import { ISpecialistModel } from "../../../lib/models/ISpecialistData";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";
import { useChangeBottomTab } from "../../../hooks/useChangeBottomTab";
import { useLayout } from "../../../hooks/useLayout";
import { SECONDARY_COLOR } from "../../../lib/constants/constantsColors";

type Props = NativeStackScreenProps<ServicesStackParams, "ServicesTextInfo">;

const ServicesTextInfo = ({ navigation, route }: Props) => {
  useLayout({ newBackground: SECONDARY_COLOR, newHeight: 0 });
  useChangeBottomTab({ isView: false });

  const { title, description, specialistData } = route.params;
  const handlePressButton = () => {
    navigation.navigate(
      "ServicesSpecialists",
      specialistData as ISpecialistModel,
    );
  };

  return (
    <ScreenContainer
      isScroll={false}
      isSafeAreaView={false}
      backgroundColor={"red"}
      viewProp={{ style: styles.container }}>
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
    </ScreenContainer>
  );
};

const { styles, DescriptionSC } = useServicesTextInfoStyles();

export default React.memo(ServicesTextInfo);
