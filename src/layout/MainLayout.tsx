import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import { defaultTheme } from "../theme/themeObj";
import { ThemeProvider } from "styled-components";
import { LogBox, View } from "react-native";
import ModalUI from "../UI/ModalUI/ModalUI";
import UserAutoLogin from "../init/UserAutoLogin";
import DecodeInit from "../init/DecodeInit";
import SearchInit from "../init/SearchInit";
import { WHITE_COLOR } from "../lib/constants/constantsColors";
import RotateInit from "../init/RotateInit";
import { useRotateStore } from "../hooks/useRotateStore";

LogBox.ignoreAllLogs();

const MainLayout = () => {
  const { width, height } = useRotateStore();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <View
          style={{
            width: width,
            height: height,
            backgroundColor: WHITE_COLOR,
          }}>
          <NavigationContainer>
            <Screens />
          </NavigationContainer>
          <ModalUI />
        </View>
      </ThemeProvider>
      <UserAutoLogin />
      <DecodeInit />
      <SearchInit />
      <RotateInit />
    </>
  );
};

export default MainLayout;
