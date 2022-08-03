import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../screens/types";
import Home from "./Home/Home";
import InnerHome from "./InnerHome/InnerHome";

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name={"Home"}
        component={Home}
        initialParams={{ title: "321" }}
      />
      <HomeStack.Screen name={"InnerHome"} component={InnerHome} />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
