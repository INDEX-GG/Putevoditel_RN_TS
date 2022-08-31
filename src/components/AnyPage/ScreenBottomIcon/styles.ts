import { StyleSheet } from "react-native";
import {
  MAIN_COLOR,
  WHITE_COLOR,
} from "../../../lib/constants/constantsColors";
import { useOrientationStore } from "../../../hooks/useOrientationStore";

export const useScreenBottomIconStyles = () => {
  const { isHorizontal } = useOrientationStore();

  const ActiveContainerSize = isHorizontal ? 50 : 70;
  const ActiveItemSize = isHorizontal ? 34 : 54;

  return StyleSheet.create({
    activeContainer: {
      width: ActiveContainerSize,
      height: ActiveContainerSize,
      backgroundColor: WHITE_COLOR,
      borderRadius: ActiveContainerSize / 2,
      padding: 8,
      marginBottom: isHorizontal ? 25 : 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    activeIconContainer: {
      width: ActiveItemSize,
      height: ActiveItemSize,
      borderRadius: ActiveItemSize / 2,
      backgroundColor: MAIN_COLOR,
      padding: isHorizontal ? 7 : 15,
    },
  });
};
