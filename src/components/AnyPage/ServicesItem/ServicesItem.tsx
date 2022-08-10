import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IServiceItemModel } from "../../../lib/models/IServiceItemModel";
import { LIGHT_YELLOW_COLOR_TWO } from "../../../lib/constants/constantsColors";

const ServicesItem = ({ title }: IServiceItemModel) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 74,
    backgroundColor: LIGHT_YELLOW_COLOR_TWO,
    marginBottom: 15,
    borderRadius: 20,
    paddingVertical: 17,
    paddingHorizontal: 25,
  },
});

export default React.memo(ServicesItem);
