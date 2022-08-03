import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeStackParams = {
  Home: {
    title: string;
  };
  InnerHome: undefined;
};

export type CountersStackParams = {
  Counters: undefined;
  Counter: {
    title: string;
  };
};

export type RootStackParamsList = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  CounterStack: NavigatorScreenParams<CountersStackParams>;
};
