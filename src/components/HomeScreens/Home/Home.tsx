import React from "react";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeBody from "./HomeBody/HomeBody";
import { SECONDARY_COLOR } from "../../../lib/constants/constantsColors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../screens/types";

type Props = NativeStackScreenProps<HomeStackParams, "Home">;

const Home = ({ navigation }: Props) => {
  const handlePressSearch = () => {
    navigation.navigate("Search");
  };
  return (
    <PageContainer isSafeAreaView={true} backgroundColor={SECONDARY_COLOR}>
      <HomeHeader handlePressSearch={handlePressSearch} />
      <HomeBody />
    </PageContainer>
  );
};

export default React.memo(Home);
