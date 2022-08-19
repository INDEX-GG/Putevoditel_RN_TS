import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import InfoIcon from "../../../assets/icon/Info.svg";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import { COLOR_BLACK_TWO } from "../../../lib/constants/constantsColors";

const AboutApp = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <InfoIcon />
      </View>
      <MontserratTextSC fontWeight={400}>О приложении</MontserratTextSC>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 5,
    color: COLOR_BLACK_TWO,
  },
  text: {},
});

export default React.memo(AboutApp);
