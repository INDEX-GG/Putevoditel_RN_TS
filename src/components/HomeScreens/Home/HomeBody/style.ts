import { StyleSheet } from "react-native";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_COLOR,
    paddingTop: 33,
    paddingHorizontal: 33,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bottomMargin: {
    marginBottom: 40,
  },
});

export const useHomeBodyStyles = () => ({
  styles,
});
