import { NavigatorScreenParams } from "@react-navigation/native";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";

export type HomeStackParams = {
  Home: undefined;
  Calculator: undefined;
};

export type ServicesStackParams = {
  Services: { title: string; data: IServiceItemModel[] };
  Counter: {
    title: string;
  };
};

export type RootStackParamsList = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  ServicesStack: NavigatorScreenParams<ServicesStackParams>;
  ProfileStack: NavigatorScreenParams<HomeStackParams>;
};
