import { IconNames } from "../../types/types";

export interface IServiceItemModel {
  title: string;
  iconName?: IconNames;
  children?: IServiceItemModel[];
}
