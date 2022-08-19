import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import InfoIcon from "../../../assets/icon/Info.svg";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import { COLOR_BLACK_TWO } from "../../../lib/constants/constantsColors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParams } from "../../../screens/types";

const AboutApp = () => {
  const { navigate } = useNavigation<NavigationProp<ProfileStackParams>>();

  const onPressAbout = () => navigate("About");

  return (
    <TouchableOpacity style={styles.container} onPress={onPressAbout}>
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
