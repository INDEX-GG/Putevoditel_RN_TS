import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../screens/types";
import Services from "./Services/Services";
import servicesData from "../../lib/mock/servicesData";

const ServicesStack = createNativeStackNavigator<ServicesStackParams>();

const ServicesScreens = () => (
  <ServicesStack.Navigator initialRouteName="Services">
    <ServicesStack.Screen
      name="Services"
      component={Services}
      initialParams={{ title: "Услуги", data: servicesData }}
      options={{ headerShown: false }}
    />
  </ServicesStack.Navigator>
);

export default ServicesScreens;
