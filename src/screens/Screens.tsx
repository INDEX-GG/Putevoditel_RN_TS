import React from "react";
import { RootStackParamsList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CounterScreens from "../components/CounterScreen/CounterScreens";
import HomeScreen from "../components/HomeScreen/HomeScreen";

const RootStack = createBottomTabNavigator<RootStackParamsList>();

const options = { headerShown: false };

const Screens = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeStack">
      <RootStack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={options}
      />
      <RootStack.Screen
        name="CounterStack"
        component={CounterScreens}
        options={options}
      />
    </RootStack.Navigator>
  );
};

export default Screens;
