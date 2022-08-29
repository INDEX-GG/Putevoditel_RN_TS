import { StyleSheet } from "react-native";
import {
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../../../../lib/constants/constantsColors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_COLOR,
  },
  titleContainer: {
    marginTop: 35,
    textAlign: "center",
    marginBottom: 38,
  },
  title: {
    textAlign: "center",
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: WHITE_COLOR,
  },
  emptyItem: {
    height: 10,
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoContainer: {
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
    marginBottom: 30,
  },
});

export const useUserNotAuthStyles = () => styles;
