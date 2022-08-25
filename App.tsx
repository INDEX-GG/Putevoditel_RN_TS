import React, { useEffect } from "react";
import MainLayout from "./src/layout/MainLayout";
import SplashScreen from "react-native-splash-screen";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <MainLayout />;
};

export default App;
