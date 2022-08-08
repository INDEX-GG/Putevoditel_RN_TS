import { MD3LightTheme as DefaultTheme, Theme } from "react-native-paper";
import { MAIN_COLOR } from "../lib/constants/constants";

export const defaultTheme = {
  colors: {
    primary: MAIN_COLOR,
    secondary: "#FFE9BD",
    lightYellow: "#FEE299",
    lightOrange: "#FFC045",
    lightBlue: "#A0D4EC",
    lightPurple: "#E9C3DE",
    black: "#000000",
  },
};

export const themePaperObj = {
  ...DefaultTheme,
  dark: false,
} as Theme;
