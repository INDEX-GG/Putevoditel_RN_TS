import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import { defaultTheme, themePaperObj } from "../theme/themeObj";
import { ThemeProvider } from "styled-components";
import { LogBox, Text, View } from "react-native";
import ScreenBottomAnimation from "../components/AnyPage/ScreenBottomAnimation/ScreenBottomAnimation";

// Disable WARNING
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const MainLayout = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <PaperProvider theme={themePaperObj}>
          <NavigationContainer>
            <Screens />
            <ScreenBottomAnimation />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MainLayout;
