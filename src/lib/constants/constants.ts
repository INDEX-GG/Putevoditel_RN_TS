import { Dimensions, Platform } from "react-native";

export const BASE_URL = "https://testguru.ru/pocketServices/";
export const REQUEST_TIMEOUT = 5000;
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const IS_IOS = Platform.OS === "ios";
export const IS_ANDROID = Platform.OS === "android";
export const HEADER_HEIGHT = 188;
export const BOTTOM_TAB_HEIGHT = IS_IOS ? 145 : 100;
export const PADDING_TOP_HEADER = IS_IOS ? 0 : 15;
