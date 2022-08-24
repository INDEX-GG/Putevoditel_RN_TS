import { StyleSheet } from "react-native";
import {
  LIGHT_YELLOW_COLOR,
  MAIN_COLOR,
} from "../lib/constants/constantsColors";

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    color: MAIN_COLOR,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    textTransform: "lowercase",
    marginTop: 7,
  },
  tabBarStyle: {
    backgroundColor: LIGHT_YELLOW_COLOR,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 13,
    paddingTop: 15,
    paddingHorizontal: 15,
    height: 80,
  },
  tabBarStyleHidden: {
    display: "none",
    position: "absolute",
    bottom: -107,
  },
  tabBarIconStyle: {
    width: 25,
    height: 25,
  },
});

export const useScreenStyles = () => styles;
