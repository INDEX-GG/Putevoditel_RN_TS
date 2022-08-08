import { StyleSheet } from "react-native";
import {
  MAIN_COLOR,
  WHITE_COLOR,
} from "../../../lib/constants/constantsColors";

const ActiveContainerSize = 70;
const ActiveItemSize = 54;

const styles = StyleSheet.create({
  activeContainer: {
    width: ActiveContainerSize,
    height: ActiveContainerSize,
    backgroundColor: WHITE_COLOR,
    borderRadius: ActiveContainerSize / 2,
    padding: 8,
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activeIconContainer: {
    width: ActiveItemSize,
    height: ActiveItemSize,
    borderRadius: ActiveItemSize / 2,
    backgroundColor: MAIN_COLOR,
    padding: 15,
  },
});

export const useScreenBottomIconStyles = () => styles;
