import { NavigatorScreenParams } from "@react-navigation/native";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";
import {
  ISpecialistModel,
  ISpecialistPersonalData,
} from "../lib/models/ISpecialistData";

export type HomeStackParams = {
  Home: undefined;
};

export type ServicesStackParams = {
  Services: { title: string; data: IServiceItemModel[] };
  ServicesTextInfo: Required<Pick<IServiceItemModel, "title" | "description">> &
    Pick<IServiceItemModel, "specialistData">;
  ServicesSpecialists: ISpecialistModel;
  ServicesCurrentSpecialist: Omit<ISpecialistModel, "specialistData"> &
    ISpecialistPersonalData;
};

export type ProfileStackParams = {
  Profile: undefined;
  SignIn: undefined;
  About: undefined;
  SignUp: undefined;
  ProfileEdit: undefined;
  ResetPassword: { email: string };
};

export type RootStackParamsList = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  ServicesStack: NavigatorScreenParams<ServicesStackParams>;
  ProfileStack: NavigatorScreenParams<ProfileStackParams>;
};
