import { Platform } from "react-native";

export const BASE_URL = "https://testguru.ru/pocketServices/";
export const REQUEST_TIMEOUT = 5000;
export const IS_IOS = Platform.OS === "ios";
export const IS_ANDROID = Platform.OS === "android";
// export const IS_SAMSUNG = Platform.constants?.Brand === "samsung";
export const HEADER_HEIGHT = 188;
export const BOTTOM_TAB_HEIGHT = 0;
export const PADDING_TOP_HEADER = IS_IOS ? 0 : 15;
