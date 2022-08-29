import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { SECONDARY_COLOR } from "../../../lib/constants/constantsColors";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import { useServicesTextInfoStyles } from "./style";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import ButtonIcon from "../../../assets/icon/GetServicesIcon.svg";
import { ISpecialistModel } from "../../../lib/models/ISpecialistData";
import { useHideBottomTab } from "../../../hooks/useHideBottomTab";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";

type Props = NativeStackScreenProps<ServicesStackParams, "ServicesTextInfo">;

const ServicesTextInfo = ({ navigation, route }: Props) => {
  const { title, description, specialistData } = route.params;
  const handlePressButton = () => {
    navigation.navigate(
      "ServicesSpecialists",
      specialistData as ISpecialistModel,
    );
  };

  // useHideBottomTab();

  return (
    <ScreenContainer
      isScroll={false}
      isSafeAreaView={false}
      backgroundColor={"red"}
      viewProp={{ style: styles.container }}>
      <View style={{ backgroundColor: "white" }}>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
      </View>
      <View>
        <Text>321</Text>
        <Text>321</Text>
        <Text>321</Text>
        <Text>321</Text>
        <Text>321</Text>
      </View>
    </ScreenContainer>
  );

  return (
    <ScreenContainer
      isScroll={false}
      isSafeAreaView={false}
      backgroundColor={SECONDARY_COLOR}
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
