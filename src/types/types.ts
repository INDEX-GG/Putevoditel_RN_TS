import { defaultTheme } from "../theme/themeObj";
import React from "react";
import { SvgProps } from "react-native-svg";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";
import { AppDispatch, RootState } from "../store";
import { AxiosInstance } from "axios";

type ThemeInterface = typeof defaultTheme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {
    linear: () => string;
  }
}

export type SVGComponentTypes = React.FC<SvgProps>;

export type IconNames =
  | "Email"
  | "Wallet"
  | "Children"
  | "Shield"
  | "ShieldTwo"
  | "Heart"
  | "Bag"
  | "List";

export type PushServiceInnerType = (
  title: string,
  data?: IServiceItemModel[],
) => () => void;

export interface IStore {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
