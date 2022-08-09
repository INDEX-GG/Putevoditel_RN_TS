import { MD3LightTheme as DefaultTheme, Theme } from "react-native-paper";
import {
  SECONDARY_COLOR,
  MAIN_COLOR,
  LIGHT_YELLOW_COLOR,
  LIGHT_ORANGE_COLOR,
  LIGHT_BLUE_COLOR,
  LIGHT_PURPLE_COLOR,
  BLACK_COLOR,
  COLOR_BLACK_TWO,
  WHITE_COLOR,
  WHITE_COLOR_D9,
  LIGHT_YELLOW_COLOR_TWO,
} from "../lib/constants/constantsColors";

export const defaultTheme = {
  colors: {
    primary: MAIN_COLOR,
    secondary: SECONDARY_COLOR,
    lightYellow: LIGHT_YELLOW_COLOR,
    lightYellowTwo: LIGHT_YELLOW_COLOR_TWO,
    lightOrange: LIGHT_ORANGE_COLOR,
    lightBlue: LIGHT_BLUE_COLOR,
    lightPurple: LIGHT_PURPLE_COLOR,
    black: BLACK_COLOR,
    blackTwo: COLOR_BLACK_TWO,
    white: WHITE_COLOR,
    whiteD9: WHITE_COLOR_D9,
  },
};

export const themePaperObj = {
  ...DefaultTheme,
  dark: false,
} as Theme;
