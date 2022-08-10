import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useHomeBodyStyles } from "./style";
import homeServicesData from "../../../../lib/mock/homeServicesData";
import HomeCard from "../../../AnyPage/HomeCard/HomeCard";
import { IHomeServicesModel } from "../../../../lib/models/IHomeServicesModel";

const HomeBody = () => {
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
    <ContainerSC>
      <FlatList
        data={homeServicesData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </ContainerSC>
  );
};

const { ContainerSC } = useHomeBodyStyles();

export default React.memo(HomeBody);
