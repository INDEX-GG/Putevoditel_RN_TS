import { StyleSheet } from "react-native";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import { IS_IOS } from "../../../../lib/constants/constants";

const styles = StyleSheet.create({
  container: {
    marginTop: IS_IOS ? 0 : 44,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 47,
    paddingHorizontal: 10,
    backgroundColor: WHITE_COLOR,
  },
  wrapper: {
    alignItems: "center",
  },
  logoContainer: {
    width: 74,
    height: 74,
    marginBottom: 11,
  },
});
export const useUserAuthStyles = () => styles;
