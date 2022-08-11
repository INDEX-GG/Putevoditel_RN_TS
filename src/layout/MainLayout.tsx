import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import { defaultTheme } from "../theme/themeObj";
import { ThemeProvider } from "styled-components";
import { LogBox } from "react-native";

// Disable WARNING
LogBox.ignoreAllLogs();

const MainLayout = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <Screens />
          {/*<ScreenBottomAnimation />*/}
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default MainLayout;
