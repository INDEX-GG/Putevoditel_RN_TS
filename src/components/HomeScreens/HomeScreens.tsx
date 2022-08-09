import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../screens/types";
import Home from "./Home/Home";
import Calculator from "./Calculator/Calculator";

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeScreens = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name={"Home"}
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name={"Calculator"} component={Calculator} />
    </HomeStack.Navigator>
  );
};

export default HomeScreens;
