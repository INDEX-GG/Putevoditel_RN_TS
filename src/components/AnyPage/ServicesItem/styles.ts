import { StyleSheet } from "react-native";
import { LIGHT_YELLOW_COLOR_TWO } from "../../../lib/constants/constantsColors";
import styled from "styled-components/native";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import React from "react";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 60,
    backgroundColor: LIGHT_YELLOW_COLOR_TWO,
    marginBottom: 15,
    borderRadius: 20,
    paddingVertical: 17,
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dynamicIcon: {
    marginRight: 20,
  },
  iconArrow: {
    marginLeft: 10,
  },
  text: {
    flex: 1,
  },
});

export const ServicesItemStyles = () => ({
  styles,
});
