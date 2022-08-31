import { StyleSheet } from "react-native";
import {
  COLOR_BLACK_TWO,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../../../lib/constants/constantsColors";
import { useOrientationStore } from "../../../hooks/useOrientationStore";

export const useServicesCurrentSpecialistStyles = () => {
  const { isHorizontal, SCREEN_WIDTH } = useOrientationStore();
  const specialistText = isHorizontal ? { fontSize: 18, lineHeight: 22 } : {};
  const desctText = isHorizontal ? { fontSize: 14, lineHeight: 18 } : {};
  return StyleSheet.create({
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
      marginBottom: isHorizontal ? 0 : 30,
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
      marginBottom: isHorizontal ? 10 : 23,
      paddingHorizontal: 66,
    },
    aboutInnerWrapper: {
      alignItems: "center",
      flexDirection: "row",
    },
    specialistLogo: {
      marginRight: 20,
      width: isHorizontal ? 60 : 73,
      height: isHorizontal ? 60 : 73,
    },
    specialistName: {
      maxWidth: isHorizontal ? "100%" : 176,
      ...specialistText,
    },
    scrollDescContainer: {
      flexGrow: 1,
    },
    specialistDescription: {
      backgroundColor: WHITE_COLOR,
      borderRadius: 40,
      paddingHorizontal: 22,
      marginBottom: isHorizontal ? 10 : 23,
    },
    descContainer: {
      flex: 1,
      paddingBottom: 20,
    },
    descText: {
      paddingTop: 20,
      ...desctText,
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
      fontSize: isHorizontal ? 12 : 14,
      lineHeight: isHorizontal ? 16 : 18,
      color: COLOR_BLACK_TWO,
    },
    dopInfoData: {},
    specialistButton: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: isHorizontal ? 10 : 20,
      paddingHorizontal: 16,
    },
    firstButton: {
      flex: 1,
      minWidth: 144,
      marginLeft: SCREEN_WIDTH > 380 ? 10 : 0,
      paddingHorizontal: 0,
      marginBottom: isHorizontal ? 0 : 5,
    },
    lastButton: {
      flex: 1,
      minWidth: 204,
      paddingHorizontal: 0,
    },
  });
};
