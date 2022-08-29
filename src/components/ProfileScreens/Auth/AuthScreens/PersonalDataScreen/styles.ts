import { StyleSheet } from "react-native";
import { GRAY_COLOR_41 } from "../../../../../lib/constants/constantsColors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  fieldsTitle: {
    marginLeft: 9,
    color: GRAY_COLOR_41,
    marginBottom: 10,
    textAlign: "left",
    maxWidth: 228,
  },
  button: {
    marginBottom: 20,
    paddingHorizontal: 0,
  },
});

export const uesPersonalDataScreenStyles = () => styles;
