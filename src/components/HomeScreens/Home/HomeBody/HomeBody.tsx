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
      const isLastElement = data.index === homeServicesData.length - 1;
      return <HomeCard isLastElement={isLastElement} {...data.item} />;
    },
    [],
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={homeServicesData}
      style={styles.container}
      contentContainerStyle={{ marginBottom: 1000 }}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

const { styles } = useHomeBodyStyles();

export default React.memo(HomeBody);
