import { NavigatorScreenParams } from "@react-navigation/native";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";
import { IPersonalDataFamilyProps } from "../components/ProfileScreens/Auth/AuthScreens/PersonalDataScreen/types";

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
