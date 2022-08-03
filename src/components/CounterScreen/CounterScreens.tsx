import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CountersStackParams } from "../../screens/types";
import Counter from "./Counter/Counter";
import React from "react";
import CounterHome from "./CounterHome/CounterHome";

const CounterStack = createNativeStackNavigator<CountersStackParams>();

const CounterScreens = () => (
  <CounterStack.Navigator initialRouteName="Counters">
    <CounterStack.Screen name="Counters" component={CounterHome} />
    <CounterStack.Screen
      name="Counter"
      component={Counter}
      initialParams={{ title: "Counter" }}
    />
  </CounterStack.Navigator>
);

export default CounterScreens;
