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
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useModalStore } from "../hooks/useModalStore";
const RootStack = createBottomTabNavigator<RootStackParamsList>();

const options = {
  headerShown: false,
} as BottomTabNavigationOptions;

const Screens = () => {
  const {
    isVisibleBottomTab,
    HomeScreenIcon,
    ProfileScreenIcon,
    ServicesScreenIcon,
    HomeScreenActiveIcon,
    ServicesScreenActiveIcon,
    ProfileScreenActiveIcon,
  } = useScreens();

  const styles = useScreenStyles();
  const { handleChangeBottomTabVisible } = useModalStore();

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
        tabBarBadgeStyle: { flexDirection: "column" },
        tabBarLabelPosition: "below-icon",
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}>
      <RootStack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={({ route }) => {
          if (getFocusedRouteNameFromRoute(route) === "Search") {
            handleChangeBottomTabVisible(false);
          }
          return {
            ...options,
            title: "??????????????",
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
        options={{
          ...options,
          title: "????????????",
          headerTintColor: "black",
          tabBarIcon: (props) => (
            <ScreenBottomIcon
              {...props}
              Icon={ServicesScreenIcon}
              ActiveIcon={ServicesScreenActiveIcon}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="ProfileStack"
        component={ProfileScreens}
        options={{
          ...options,
          title: "??????????????",
          tabBarIcon: (props) => (
            <ScreenBottomIcon
              {...props}
              Icon={ProfileScreenIcon}
              ActiveIcon={ProfileScreenActiveIcon}
            />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};

export default Screens;
