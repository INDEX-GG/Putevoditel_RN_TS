import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../screens/types";
import Services from "./Services/Services";
import socialServicesData from "../../lib/mock/socialServicesData";
import ServicesTextInfo from "./ServicesTextInfo/ServicesTextInfo";

const ServicesStack = createNativeStackNavigator<ServicesStackParams>();

const ServicesScreens = () => (
  <ServicesStack.Navigator initialRouteName="Services">
    <ServicesStack.Screen
      name="Services"
      component={Services}
      initialParams={{ title: "Услуги", data: socialServicesData }}
      options={{ headerShown: false }}
    />
    <ServicesStack.Screen
      name="ServicesTextInfo"
      component={ServicesTextInfo}
      initialParams={{ title: "", description: "" }}
      options={{ headerShown: false }}
    />
  </ServicesStack.Navigator>
);

export default ServicesScreens;
