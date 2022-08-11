import { StyleSheet } from "react-native";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import { SCREEN_HEIGHT } from "../../../../lib/constants/constants";

const styles = StyleSheet.create({
  container: {
    padding: 33,
    height: SCREEN_HEIGHT - 107 - 258,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: WHITE_COLOR,
  },
  bottomContainer: {
    backgroundColor: WHITE_COLOR,
    height: 30,
  },
});

export const useHomeBodyStyles = () => ({
  styles,
});
