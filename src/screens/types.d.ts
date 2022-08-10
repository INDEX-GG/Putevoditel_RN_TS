import { NavigatorScreenParams } from "@react-navigation/native";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";

export type HomeStackParams = {
  Home: undefined;
};

export type ServicesStackParams = {
  Services: { title: string; data: IServiceItemModel[] };
  ServicesTextInfo: { title: string; description: string };
};

export type ProfileStackParams = {};

export type RootStackParamsList = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  ServicesStack: NavigatorScreenParams<ServicesStackParams>;
  ProfileStack: NavigatorScreenParams<ProfileStackParams>;
};
