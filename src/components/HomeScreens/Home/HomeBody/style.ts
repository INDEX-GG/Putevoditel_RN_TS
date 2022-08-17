import { StyleSheet } from "react-native";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import {
  BOTTOM_TAB_HEIGHT,
  HEADER_HEIGHT,
  IS_IOS,
  SCREEN_HEIGHT,
} from "../../../../lib/constants/constants";

console.log(SCREEN_HEIGHT);

const styles = StyleSheet.create({
  container: {
    padding: 33,
    height: SCREEN_HEIGHT - HEADER_HEIGHT - BOTTOM_TAB_HEIGHT,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: WHITE_COLOR,
  },
  bottomContainer: {},
});

export const useHomeBodyStyles = () => ({
  styles,
});
