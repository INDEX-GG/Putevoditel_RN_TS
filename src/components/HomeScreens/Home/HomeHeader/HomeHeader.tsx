import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, ViewComponent } from "react-native";
import RalewayTextSC from "../../../../UI/RalewayTextSC/RalewayTextSC";
import LogoIcon from "../../../../assets/icon/Logo.svg";
import { LIGHT_ORANGE_COLOR } from "../../../../lib/constants/constantsColors";
import SearchIcon from "../../../../assets/icon/SearchIcon.svg";
import { useHomeHeaderStyles } from "./styles";

const HomeHeader = () => {
  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        console.log(event.nativeEvent.layout, 1);
      }}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <FirstMontserratTextSC fontWeight={500}>
            С заботой о гражданах
          </FirstMontserratTextSC>
          <RalewayTextSC>Социальные услуги Майминского района</RalewayTextSC>
        </View>
        <View style={styles.logoContainer}>
          <LogoIcon />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <ServicesInputSC
          placeholder={"Найти услугу"}
          placeholderTextColor={LIGHT_ORANGE_COLOR}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { styles, FirstMontserratTextSC, ServicesInputSC } =
  useHomeHeaderStyles();

export default React.memo(HomeHeader);
