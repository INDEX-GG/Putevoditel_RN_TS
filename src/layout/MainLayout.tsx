import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import { defaultTheme } from "../theme/themeObj";
import { ThemeProvider } from "styled-components";
import { LogBox, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../lib/constants/constants";

LogBox.ignoreAllLogs();

const MainLayout = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
          <NavigationContainer>
            <Screens />
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </Provider>
  );
};

export default MainLayout;
