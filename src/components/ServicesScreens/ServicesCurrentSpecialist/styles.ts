import { StyleSheet } from "react-native";
import {
  COLOR_BLACK_TWO,
  WHITE_COLOR,
} from "../../../lib/constants/constantsColors";
import { SCREEN_WIDTH } from "../../../lib/constants/constants";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
  },
  headerWrapper: {
    paddingHorizontal: 33,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 29,
  },
  specialistInfo: {
    flex: 1,
  },
  sharingIcon: {
    width: 50,
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
  specialistDescription: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    borderRadius: 40,
    paddingTop: 40,
    paddingHorizontal: 22,
    paddingBottom: 23,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 23,
  },
  dopInfoSpecialist: {},
  dopInfoItem: {
    flexDirection: "row",
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
  dopInfoData: {
    maxWidth: SCREEN_WIDTH - 60 - 51,
  },
  specialistButton: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  firstButton: {
    width: "40%",
    minWidth: 144,
    marginLeft: 10,
    paddingHorizontal: 0,
    marginBottom: 5,
  },
  lastButton: {
    width: "50%",
    minWidth: 204,
    paddingHorizontal: 0,
  },
});

export const useServicesCurrentSpecialistStyles = () => styles;