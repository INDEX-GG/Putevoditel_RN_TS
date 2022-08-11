import React, { useCallback } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../screens/types";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeBody from "./HomeBody/HomeBody";
import {
  LIGHT_YELLOW_COLOR,
  WHITE_COLOR,
} from "../../../lib/constants/constantsColors";
import { FlatList, ListRenderItemInfo } from "react-native";
import homeServicesData from "../../../lib/mock/homeServicesData";
import { IHomeServicesModel } from "../../../lib/models/IHomeServicesModel";
import HomeCard from "../../AnyPage/HomeCard/HomeCard";

type Props = NativeStackScreenProps<HomeStackParams, "Home">;

const Home = (props: Props) => {
  const keyExtractor = useCallback(({ id }: IHomeServicesModel) => {
    return `${id}`;
  }, []);

  const renderItem = useCallback(
    (data: ListRenderItemInfo<IHomeServicesModel>) => {
      return <HomeCard {...data.item} />;
    },
    [],
  );
  return (
    // <PageContainer isSafeAreaView={true} backgroundColor={LIGHT_YELLOW_COLOR}>
    //   <HomeHeader />
    //   <HomeBody />
    // </PageContainer>
    <PageContainer isSafeAreaView={true} backgroundColor={LIGHT_YELLOW_COLOR}>
      <FlatList
        style={{
          // border-top-left-radius: 40px;
          // border-top-right-radius: 40px;
          // background-color: ${({ theme }) => theme.colors.white};
          // padding: 33px;
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          backgroundColor: WHITE_COLOR,
          padding: 33,
        }}
        ListHeaderComponent={HomeHeader}
        data={homeServicesData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </PageContainer>
  );
};

export default React.memo(Home);
