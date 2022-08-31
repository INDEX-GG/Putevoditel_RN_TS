import React from "react";
import { View, ScrollView } from "react-native";
import { SECONDARY_COLOR } from "../../../lib/constants/constantsColors";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import SharingIcon from "../../../assets/icon/SharingIcon.svg";
import SpecialistIcon from "../../../assets/icon/SpecialistIcon.svg";
import CallIcon from "../../../assets/icon/CallIcon.svg";
import GeoIcon from "../../../assets/icon/GeoIcon.svg";
import RalewayTextSC from "../../../UI/RalewayTextSC/RalewayTextSC";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import { useServicesCurrentSpecialist } from "./useServicesCurrentSpecialist";
import { ServicesCurrentSpecialistProps } from "./types";
import { useServicesCurrentSpecialistStyles } from "./styles";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";
import { useChangeBottomTab } from "../../../hooks/useChangeBottomTab";

const ServicesCurrentSpecialist = (props: ServicesCurrentSpecialistProps) => {
  useChangeBottomTab({ isView: false, isUnmountedOpen: false });
  const { route } = props;
  const { name, department, address } = route.params;
  const { handleShareInfo, handleCallPhone, handleOpenMap } =
    useServicesCurrentSpecialist(props);
  const styles = useServicesCurrentSpecialistStyles();

  return (
    <ScreenContainer
      isScroll={false}
      isSafeAreaView={true}
      backgroundColor={SECONDARY_COLOR}
      viewProp={{ style: styles.scrollContainer }}>
      <View style={styles.headerWrapper}>
        <ServicesHeader title="Специалисты" onPressShare={handleShareInfo}>
          <View style={styles.sharingIcon}>
            <SharingIcon />
          </View>
        </ServicesHeader>
      </View>
      <View style={styles.aboutSpecialist}>
        <View style={styles.aboutInnerWrapper}>
          <View style={styles.specialistLogo}>
            <SpecialistIcon />
          </View>
          <RalewayTextSC style={styles.specialistName}>{name}</RalewayTextSC>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollDescContainer}
        style={styles.specialistDescription}>
        <View style={styles.descContainer}>
          <MontserratTextSC style={styles.descText} fontWeight={500}>
            {department}
          </MontserratTextSC>
        </View>
        <View style={styles.dopInfoSpecialist}>
          <View style={styles.dopInfoItem}>
            <MontserratTextSC
              style={[styles.dopInfoText, styles.dopInfoTitle]}
              fontWeight={600}>
              Адрес:
            </MontserratTextSC>
            <MontserratTextSC
              style={[styles.dopInfoText, styles.dopInfoData]}
              fontWeight={500}>
              {address}
            </MontserratTextSC>
          </View>
        </View>
      </ScrollView>
      <View
        style={styles.specialistButton}
        onLayout={(props) => {
          console.log(props.nativeEvent.layout.height);
        }}>
        <TouchableButtonUI
          style={styles.firstButton}
          text="Позвонить"
          Icon={CallIcon}
          onPress={handleCallPhone}
          iconPosition="start"
        />
        <TouchableButtonUI
          style={styles.lastButton}
          text="Показать на карте"
          Icon={GeoIcon}
          onPress={handleOpenMap}
          iconPosition="start"
        />
      </View>
    </ScreenContainer>
  );
};

export default React.memo(ServicesCurrentSpecialist);
