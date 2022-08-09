import React from "react";
import { RootStackParamsList } from "./types";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreens/HomeScreens";
import ScreenBottomIcon from "../components/AnyPage/ScreenBottomIcon/ScreenBottomIcon";
import { useScreens } from "./useScreens";
import { useScreensStyle } from "./useScreensStyle";
import { MAIN_COLOR, WHITE_COLOR } from "../lib/constants/constantsColors";
import ServicesScreens from "../components/ServicesScreens/ServicesScreen";

const RootStack = createBottomTabNavigator<RootStackParamsList>();

const options = {
  headerShown: false,
} as BottomTabNavigationOptions;

const Screens = () => {
  const { ServicesScreenIcon, ProfileScreenIcon, HomeScreenIcon } =
    useScreens();
  return (
    <RootStack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: WHITE_COLOR,
        tabBarInactiveTintColor: MAIN_COLOR,
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}>
      <RootStack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          ...options,
          title: "главная",
          headerShadowVisible: false,
          tabBarIcon: (props) => (
            <ScreenBottomIcon {...props} Icon={HomeScreenIcon} />
          ),
        }}
      />
      <RootStack.Screen
        name="ServicesStack"
        component={ServicesScreens}
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
        component={ServicesScreens}
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

const styles = useScreensStyle();

export default Screens;
