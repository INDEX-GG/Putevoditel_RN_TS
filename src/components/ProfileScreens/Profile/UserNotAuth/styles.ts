import { StyleSheet } from "react-native";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";

const styles = StyleSheet.create({
  titleContainer: {
    textAlign: "center",
    marginBottom: 38,
  },
  title: {
    textAlign: "center",
  },
  contentContainer: {
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: WHITE_COLOR,
  },
  contentWrapper: {
    paddingTop: 101,
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
});

export const useUserNotAuthStyles = () => styles;
