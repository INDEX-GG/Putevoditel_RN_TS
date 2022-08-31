import { IconNames } from "../../types/types";
import { ISpecialistModel } from "./ISpecialistData";

export interface IServiceItemModelFile {
  url: string;
  fileName: string;
  isTemplate: boolean;
}

export interface IServiceItemModel {
  title: string;
  description?: string;
  specialistData?: ISpecialistModel;
  iconName?: IconNames;
  children?: IServiceItemModel[];
  file?: IServiceItemModelFile;
}
