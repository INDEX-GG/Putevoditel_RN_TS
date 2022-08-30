import React, { useEffect } from "react";
import MainLayout from "./src/layout/MainLayout";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import store from "./src/store";
import { LogBox } from "react-native";
import { defaultTheme } from "./src/theme/themeObj";
import { ThemeProvider } from "styled-components";

LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <MainLayout />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
