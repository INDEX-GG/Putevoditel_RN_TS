import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../screens/types";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeBody from "./HomeBody/HomeBody";
import { LIGHT_YELLOW_COLOR } from "../../../lib/constants/constantsColors";

type Props = NativeStackScreenProps<HomeStackParams, "Home">;

const Home = (props: Props) => {
  return (
    <PageContainer isSafeAreaView={true} backgroundColor={LIGHT_YELLOW_COLOR}>
      <HomeHeader />
      <HomeBody />
    </PageContainer>
  );
};

export default React.memo(Home);
