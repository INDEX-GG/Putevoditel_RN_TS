import React from "react";
import { RootStackParamsList } from "./types";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreens/HomeScreens";
import ScreenBottomIcon from "../components/AnyPage/ScreenBottomIcon/ScreenBottomIcon";
import { useScreens } from "./useScreens";
import { useScreenStyles } from "./styles";
import { MAIN_COLOR, WHITE_COLOR } from "../lib/constants/constantsColors";
import ServicesScreens from "../components/ServicesScreens/ServicesScreen";
import ProfileScreens from "../components/ProfileScreens/ProfileScreens";
const RootStack = createBottomTabNavigator<RootStackParamsList>();

const options = {
  headerShown: false,
} as BottomTabNavigationOptions;

const Screens = () => {
  const {
    HomeScreenIcon,
    ProfileScreenIcon,
    isVisibleBottomTab,
    ServicesScreenIcon,
    HomeScreenActiveIcon,
    ServicesScreenActiveIcon,
    ProfileScreenActiveIcon,
    handleChangeVisibleBottomTab,
  } = useScreens();

  return (
    <RootStack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: WHITE_COLOR,
        tabBarInactiveTintColor: MAIN_COLOR,
        tabBarStyle: {
          ...styles.tabBarStyle,
          ...(!isVisibleBottomTab ? styles.tabBarStyleHidden : {}),
        },
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}>
      <RootStack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={({ route }) => {
          handleChangeVisibleBottomTab(route, "Home");
          return {
            ...options,
            title: "главная",
            headerShadowVisible: false,
            tabBarIcon: (props) => (
              <ScreenBottomIcon
                {...props}
                Icon={HomeScreenIcon}
                ActiveIcon={HomeScreenActiveIcon}
              />
            ),
          };
        }}
      />
      <RootStack.Screen
        name="ServicesStack"
        component={ServicesScreens}
        options={({ route }) => {
          handleChangeVisibleBottomTab(route, "Service");
          return {
            ...options,
            title: "Услуги",
            headerTintColor: "black",
            tabBarIcon: (props) => (
              <ScreenBottomIcon
                {...props}
                Icon={ServicesScreenIcon}
                ActiveIcon={ServicesScreenActiveIcon}
              />
            ),
          };
        }}
      />
      <RootStack.Screen
        name="ProfileStack"
        component={ProfileScreens}
        options={({ route }) => {
          handleChangeVisibleBottomTab(route, "Profile");
          return {
            ...options,
            title: "Профиль",
            tabBarIcon: (props) => (
              <ScreenBottomIcon
                {...props}
                Icon={ProfileScreenIcon}
                ActiveIcon={ProfileScreenActiveIcon}
              />
            ),
          };
        }}
      />
    </RootStack.Navigator>
  );
};

const styles = useScreenStyles();

export default Screens;
