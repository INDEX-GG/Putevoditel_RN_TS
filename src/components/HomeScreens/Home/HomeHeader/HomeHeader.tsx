import React from "react";
import { View, TouchableOpacity } from "react-native";
import RalewayTextSC from "../../../../UI/RalewayTextSC/RalewayTextSC";
import LogoIcon from "../../../../assets/icon/Logo.svg";
import SearchIcon from "../../../../assets/icon/SearchIcon.svg";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import { useHomeHeaderStyles } from "./styles";

interface IHomeHeaderProps {
  handlePressSearch: () => void;
}

const HomeHeader = ({ handlePressSearch }: IHomeHeaderProps) => {
  const { styles, isHorizontal } = useHomeHeaderStyles();
  const textSubHeader = isHorizontal
    ? "Социальные услуги майминского района"
    : "Социальные услуги Майминского района";

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <MontserratTextSC style={styles.headerText} fontWeight={500}>
            С заботой о гражданах
          </MontserratTextSC>
          <RalewayTextSC style={styles.subHeaderText}>
            {textSubHeader}
          </RalewayTextSC>
        </View>
        <View style={styles.logoContainer}>
          <LogoIcon />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handlePressSearch}
        style={styles.searchContainer}>
        <View style={styles.search}>
          <MontserratTextSC fontWeight={500} style={styles.searchText}>
            Найти услугу
          </MontserratTextSC>
        </View>
        <View style={styles.searchIconContainer}>
          <SearchIcon color="#EC7609" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(HomeHeader);
