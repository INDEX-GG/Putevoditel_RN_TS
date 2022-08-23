import React from "react";
import { View, TouchableOpacity } from "react-native";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import { SCREEN_HEIGHT } from "../../../lib/constants/constants";
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

const ServicesCurrentSpecialist = (props: ServicesCurrentSpecialistProps) => {
  const { route } = props;
  const { name, department, address } = route.params;
  const { handleShareInfo, handleCallPhone, handleOpenMap } =
    useServicesCurrentSpecialist(props);

  return (
    <PageContainer
      isSafeAreaView={true}
      paddingTop={0}
      height={`${SCREEN_HEIGHT}`}
      backgroundColor={SECONDARY_COLOR}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <ServicesHeader title="Специалисты " />
          <TouchableOpacity
            style={styles.sharingIcon}
            onPress={handleShareInfo}>
            <SharingIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.specialistInfo}>
          <View style={styles.aboutSpecialist}>
            <View style={styles.aboutInnerWrapper}>
              <View style={styles.specialistLogo}>
                <SpecialistIcon />
              </View>
              <RalewayTextSC style={styles.specialistName}>
                {name}
              </RalewayTextSC>
            </View>
          </View>
          <View style={styles.specialistDescription}>
            <MontserratTextSC fontWeight={500}>{department}</MontserratTextSC>
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
          </View>
          <View style={styles.specialistButton}>
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
        </View>
      </View>
    </PageContainer>
  );
};

const styles = useServicesCurrentSpecialistStyles();

export default React.memo(ServicesCurrentSpecialist);