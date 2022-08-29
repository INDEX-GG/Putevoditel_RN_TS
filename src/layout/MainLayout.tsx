import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import { defaultTheme } from "../theme/themeObj";
import { ThemeProvider } from "styled-components";
import ModalUI from "../UI/ModalUI/ModalUI";
import UserAutoLoginInit from "../init/UserAutoLoginInit";
import DecodeInit from "../init/DecodeInit";
import SearchInit from "../init/SearchInit";
import OrientationInit from "../init/OrientationInit";
import { View } from "react-native";
import { WHITE_COLOR } from "../lib/constants/constantsColors";

const MainLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: WHITE_COLOR,
      }}>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
        <ModalUI />
      </ThemeProvider>
      <UserAutoLoginInit />
      <SearchInit />
      <DecodeInit />
      <OrientationInit />
    </View>
  );
};

export default MainLayout;
