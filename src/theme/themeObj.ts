import { MD3LightTheme as DefaultTheme, Theme } from "react-native-paper";
import {
  SECONDARY_COLOR,
  MAIN_COLOR,
  LIGHT_YELLOW_COLOR,
  LIGHT_ORANGE_COLOR,
  LIGHT_BLUE_COLOR,
  LIGHT_PURPLE_COLOR,
  BLACK_COLOR,
} from "../lib/constants/constantsColors";

export const defaultTheme = {
  colors: {
    primary: MAIN_COLOR,
    secondary: SECONDARY_COLOR,
    lightYellow: LIGHT_YELLOW_COLOR,
    lightOrange: LIGHT_ORANGE_COLOR,
    lightBlue: LIGHT_BLUE_COLOR,
    lightPurple: LIGHT_PURPLE_COLOR,
    black: BLACK_COLOR,
  },
};

export const themePaperObj = {
  ...DefaultTheme,
  dark: false,
} as Theme;
