import React, { useEffect } from "react";
import MainLayout from "./src/layout/MainLayout";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};

export default App;
