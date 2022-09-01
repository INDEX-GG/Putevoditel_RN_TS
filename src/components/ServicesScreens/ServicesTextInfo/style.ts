import { StyleSheet } from "react-native";
import {
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../../../lib/constants/constantsColors";
import { useOrientationStore } from "../../../hooks/useOrientationStore";

export const useServicesTextInfoStyles = () => {
  const { isHorizontal, SCREEN_WIDTH } = useOrientationStore();
  const styles = StyleSheet.create({
    container: {
      paddingTop: 0,
      backgroundColor: SECONDARY_COLOR,
    },
    infoContainer: {
      flex: 1,
      backgroundColor: WHITE_COLOR,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
    },
    description: {
      fontSize: isHorizontal ? 14 : 16,
      lineHeight: isHorizontal ? 18 : 20,
      textAlign: "justify",
      paddingBottom: 20,
    },
    scrollContainer: {
      height: "100%",
      paddingHorizontal: 27,
    },
    header: {
      flexDirection: "row",
      paddingTop: isHorizontal ? 10 : 20,
      backgroundColor: WHITE_COLOR,
      marginBottom: isHorizontal ? 10 : 25,
      paddingBottom: 10,
    },
    bottomContainer: {
      width: "100%",
      display: "flex",
      flexDirection: isHorizontal ? "row" : "column",
      alignItems: isHorizontal ? "flex-start" : "flex-end",
      justifyContent: isHorizontal ? "flex-end" : "flex-start",
      marginTop: 20,
      marginBottom: isHorizontal ? 5 : 20,
      paddingRight: 21,
    },
    buttonFileContainer: {
      alignItems: "flex-end",
    },
    buttonContainer: {
      maxWidth: 234,
      height: 44,
      marginRight: isHorizontal ? 5 : 0,
      marginBottom: isHorizontal ? 0 : 17,
    },
    downloadButton: {
      height: "auto",
      marginBottom: 16,
      maxWidth: SCREEN_WIDTH - 21 > 350 ? 354 : 300,
      width: "100%",
    },
    downloadDefault: {
      height: 50,
      maxWidth: 250,
    },
  });
  return { styles };
};
