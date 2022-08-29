import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import { defaultTheme } from "../theme/themeObj";
import { ThemeProvider } from "styled-components";
import ModalUI from "../UI/ModalUI/ModalUI";
import UserAutoLogin from "../init/UserAutoLogin";
import DecodeInit from "../init/DecodeInit";
import SearchInit from "../init/SearchInit";

const MainLayout = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
        <ModalUI />
      </ThemeProvider>
      <UserAutoLogin />
      <DecodeInit />
      <SearchInit />
    </>
  );
};

export default MainLayout;
