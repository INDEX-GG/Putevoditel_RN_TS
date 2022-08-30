import { StyleSheet } from "react-native";
import {
  COLOR_BLACK_TWO,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../../../lib/constants/constantsColors";

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: SECONDARY_COLOR,
  },
  container: {
    height: "100%",
    flexDirection: "column",
  },
  headerWrapper: {
    paddingHorizontal: 33,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  specialistInfo: {
    flex: 1,
  },
  sharingIcon: {
    width: 30,
    height: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  aboutSpecialist: {
    alignItems: "center",
    marginBottom: 23,
  },
  aboutInnerWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  specialistLogo: {
    marginRight: 20,
    width: 73,
    height: 73,
  },
  specialistName: {
    maxWidth: 176,
  },
  scrollDescContainer: {
    flexGrow: 1,
  },
  specialistDescription: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 40,
    paddingHorizontal: 22,
    marginBottom: 23,
  },
  descContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  descText: {
    paddingTop: 20,
  },
  dopInfoSpecialist: {
    paddingBottom: 23,
  },
  dopInfoItem: {
    flexDirection: "row",
    paddingRight: 50,
    alignItems: "flex-start",
  },
  dopInfoTitle: {
    marginRight: 16,
  },
  dopInfoText: {
    fontSize: 14,
    lineHeight: 17,
    color: COLOR_BLACK_TWO,
  },
  dopInfoData: {},
  specialistButton: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  firstButton: {
    width: "40%",
    marginLeft: 10,
    paddingHorizontal: 0,
    marginBottom: 5,
  },
  lastButton: {
    width: "57%",
    paddingHorizontal: 0,
  },
});

export const useServicesCurrentSpecialistStyles = () => styles;
