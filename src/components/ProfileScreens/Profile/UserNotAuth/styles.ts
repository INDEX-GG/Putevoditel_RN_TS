import { StyleSheet } from "react-native";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import {
  BOTTOM_TAB_HEIGHT,
  SCREEN_HEIGHT,
} from "../../../../lib/constants/constants";

const HEIGHT = SCREEN_HEIGHT - BOTTOM_TAB_HEIGHT - 66;

const styles = StyleSheet.create({
  titleContainer: {
    textAlign: "center",
    marginBottom: 38,
  },
  title: {
    textAlign: "center",
  },
  contentContainer: {
    height: HEIGHT,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: WHITE_COLOR,
  },
  scrollContainer: {
    height: HEIGHT,
  },
  contentWrapper: {
    height: HEIGHT,
    alignItems: "center",
  },
  infoContainer: {
    paddingTop: 101,
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    width: 110,
    height: 110,
    marginBottom: 15,
  },
  description: {
    maxWidth: 242,
    flexDirection: "row",
    textAlign: "center",
    marginBottom: 21,
  },
  descriptionSpan: {
    color: "#BE3F24",
    textDecorationLine: "underline",
    textDecorationColor: "#BE3F24",
    textDecorationStyle: "solid",
  },
  buttonStyle: {
    minWidth: 250,
    marginBottom: 17,
    height: 50,
  },
  aboutApp: {
    paddingBottom: 38,
  },
});

export const useUserNotAuthStyles = () => styles;
