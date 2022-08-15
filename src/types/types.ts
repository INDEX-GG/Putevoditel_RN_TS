import { defaultTheme } from "../theme/themeObj";
import React from "react";
import { SvgProps } from "react-native-svg";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";
import { AppDispatch, RootState } from "../store";
import { AxiosInstance } from "axios";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
} from "react-native";

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
  | "Map"
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

export interface IDefaultCallbackPattern {
  fulfilledCallback: () => void;
  rejectCallback: (message?: string) => void;
}

export interface IDefaultSuccessResponse {
  msg: string;
}

export type ModalContentType = "email" | null;

export type TextInputChangeFunction = (
  e: NativeSyntheticEvent<TextInputChangeEventData>,
) => void;

export type TextInputKeyDownFunction = (
  e: NativeSyntheticEvent<TextInputKeyPressEventData>,
) => void;
