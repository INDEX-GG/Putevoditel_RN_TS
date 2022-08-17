import { NavigatorScreenParams } from "@react-navigation/native";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";

export type HomeStackParams = {
  Home: undefined;
};

export type ServicesStackParams = {
  Services: { title: string; data: IServiceItemModel[] };
  ServicesTextInfo: { title: string; description: string };
  ServicesSpecialists: undefined;
};

export type ProfileStackParams = {
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: { email: string };
};

export type RootStackParamsList = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  ServicesStack: NavigatorScreenParams<ServicesStackParams>;
  ProfileStack: NavigatorScreenParams<ProfileStackParams>;
};
