import { ImageSourcePropType } from "react-native";
import { IServiceItemModel } from "./IServiceItemModel";

export interface IHomeServicesModel {
  id: number;
  title: string;
  description: string;
  redirectTitle: string;
  redirectData: IServiceItemModel[];
  photo: {
    uri: ImageSourcePropType;
    width: number;
    height: number;
    marginRight: number;
    marginBottom: number;
  };
  backgroundColor: string;
}
