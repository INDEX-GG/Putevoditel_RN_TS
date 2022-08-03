import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import { themeObj } from "../theme/themeObj";

const MainLayout = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={themeObj}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default MainLayout;
