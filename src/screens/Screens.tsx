import React from "react";
import { RootStackParamsList } from "./types";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import CounterScreens from "../components/CounterScreen/CounterScreens";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import HomeScreenIcon from "../assets/icon/HomeIcon.svg";
import ServicesScreenIcon from "../assets/icon/Services.svg";
import ProfileScreenIcon from "../assets/icon/Profile.svg";
import ScreenBottomIcon from "../components/AnyPage/ScreenBottomIcon/ScreenBottomIcon";
import { MAIN_COLOR } from "../lib/constants/constants";

const RootStack = createBottomTabNavigator<RootStackParamsList>();

const options = {
  headerShown: false,
} as BottomTabNavigationOptions;

const Screens = () => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarLabelStyle: { color: MAIN_COLOR },
        tabBarInactiveTintColor: "blue",
      }}>
      <RootStack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          ...options,
          title: "Главная",
          tabBarIcon: (props) => (
            <ScreenBottomIcon {...props} Icon={HomeScreenIcon} />
          ),
        }}
      />
      <RootStack.Screen
        name="ServicesStack"
        component={CounterScreens}
        options={{
          ...options,
          title: "Услуги",
          headerTintColor: "black",
          tabBarIcon: (props) => (
            <ScreenBottomIcon {...props} Icon={ServicesScreenIcon} />
          ),
        }}
      />
      <RootStack.Screen
        name="ProfileStack"
        component={CounterScreens}
        options={{
          ...options,
          title: "Профиль",
          tabBarIcon: (props) => (
            <ScreenBottomIcon {...props} Icon={ProfileScreenIcon} />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};

export default Screens;
