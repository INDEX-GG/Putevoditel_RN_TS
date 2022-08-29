import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeBody from "./HomeBody/HomeBody";
import { SECONDARY_COLOR } from "../../../lib/constants/constantsColors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../screens/types";
import { StyleSheet } from "react-native";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";

type Props = NativeStackScreenProps<HomeStackParams, "Home">;

const Home = ({ navigation }: Props) => {
  const handlePressSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <ScreenContainer
      isScroll={false}
      backgroundColor={SECONDARY_COLOR}
      isSafeAreaView={true}
      viewProp={{
        style: styles.container,
      }}>
      <HomeHeader handlePressSearch={handlePressSearch} />
      <HomeBody />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_COLOR,
  },
});

export default React.memo(Home);
