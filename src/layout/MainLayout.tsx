import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";

const MainLayout = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </Provider>
  );
};

export default MainLayout;
