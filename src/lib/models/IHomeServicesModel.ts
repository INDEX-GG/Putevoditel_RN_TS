import { ImageSourcePropType } from "react-native";

export interface IHomeServicesModel {
  id: number;
  title: string;
  description: string;
  pathname: "ServicesStack" | "HomeStack";
  screen: "Services" | "Calculator";
  photo: { uri: ImageSourcePropType; width: number; height: number };
  backgroundColor: string;
}
