import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "../screens/Screens";
import { defaultTheme } from "../theme/themeObj";
import { ThemeProvider } from "styled-components";
import { Button, Image, LogBox, SafeAreaView, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../lib/constants/constants";
import ModalUI from "../UI/ModalUI/ModalUI";
import UserAutoLogin from "../init/UserAutoLogin";
import DecodeInit from "../init/DecodeInit";
import SearchInit from "../init/SearchInit";
import { WHITE_COLOR } from "../lib/constants/constantsColors";
import { useDownloadFile } from "../hooks/useDownloadFile";
import RNFetchBlob from "rn-fetch-blob";

LogBox.ignoreAllLogs();

const MainLayout = () => {
  const { handleDownloadFile } = useDownloadFile();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <View
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            backgroundColor: WHITE_COLOR,
          }}>
          <Image
            source={{
              uri: `${RNFetchBlob.fs.dirs.DocumentDir}/test.png`,
            }}
            width={200}
            height={200}
            style={{ width: 200, height: 200, backgroundColor: "red" }}
          />
          <SafeAreaView>
            <Button title={"123"} onPress={() => handleDownloadFile("word")} />
          </SafeAreaView>
          <NavigationContainer>
            <Screens />
          </NavigationContainer>
          <ModalUI />
        </View>
      </ThemeProvider>
      <UserAutoLogin />
      <DecodeInit />
      <SearchInit />
    </>
  );
};

export default MainLayout;
