import { StyleSheet } from "react-native";
import {
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../../../../lib/constants/constantsColors";
import { useOrientationStore } from "../../../../hooks/useOrientationStore";

export const useUserNotAuthStyles = () => {
  const { isHorizontal } = useOrientationStore();
  return StyleSheet.create({
    container: {
      backgroundColor: SECONDARY_COLOR,
    },
    titleContainer: {
      marginTop: isHorizontal ? 0 : 35,
      textAlign: "center",
      marginBottom: isHorizontal ? 10 : 38,
    },
    title: isHorizontal
      ? {
          fontSize: 20,
          lineHeight: 24,
          textAlign: "center",
        }
      : {
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
      width: isHorizontal ? 80 : 110,
      height: isHorizontal ? 80 : 110,
      marginBottom: isHorizontal ? 10 : 15,
    },
    description: {
      maxWidth: 242,
      fontSize: isHorizontal ? 14 : 16,
      lineHeight: isHorizontal ? 18 : 20,
      flexDirection: "row",
      textAlign: "center",
      marginBottom: 21,
    },
    descriptionSpan: {
      color: "#BE3F24",
      fontSize: isHorizontal ? 14 : 16,
      lineHeight: isHorizontal ? 18 : 20,
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
};
