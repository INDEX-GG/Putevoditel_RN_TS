import { defaultTheme } from "../theme/themeObj";
import React from "react";
import { SvgProps } from "react-native-svg";

type ThemeInterface = typeof defaultTheme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}

export type SVGComponentTypes = React.FC<SvgProps>;
