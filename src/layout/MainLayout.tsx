import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import { defaultTheme, themePaperObj } from "../theme/themeObj";
import { ThemeProvider } from "styled-components";

const MainLayout = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <PaperProvider theme={themePaperObj}>
          <NavigationContainer>
            <Screens />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MainLayout;
