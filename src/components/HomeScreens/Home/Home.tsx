import React from "react";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeBody from "./HomeBody/HomeBody";
import { SECONDARY_COLOR } from "../../../lib/constants/constantsColors";

const Home = () => {
  return (
    <PageContainer isSafeAreaView={true} backgroundColor={SECONDARY_COLOR}>
      <HomeHeader />
      <HomeBody />
    </PageContainer>
  );
};

export default React.memo(Home);
