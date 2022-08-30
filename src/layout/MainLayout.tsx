import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import ModalUI from "../UI/ModalUI/ModalUI";
import UserAutoLoginInit from "../init/UserAutoLoginInit";
import DecodeInit from "../init/DecodeInit";
import SearchInit from "../init/SearchInit";
import OrientationInit from "../init/OrientationInit";
import { View } from "react-native";
import { useLayout } from "../hooks/useLayout";

const MainLayout = () => {
  const { layoutBackground, layoutHeight, height } = useLayout({});
  const heightStyle = layoutHeight ? { height } : { flex: 1 };

  return (
    <View
      style={{
        ...heightStyle,
        backgroundColor: layoutBackground,
      }}>
      <>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
        <ModalUI />
      </>
      <UserAutoLoginInit />
      <SearchInit />
      <DecodeInit />
      <OrientationInit />
    </View>
  );
};

export default MainLayout;
