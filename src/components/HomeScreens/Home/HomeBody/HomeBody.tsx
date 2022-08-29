import React from "react";
import { useHomeBodyStyles } from "./style";
import homeServicesData from "../../../../lib/mock/homeServicesData";
import HomeCard from "../../../AnyPage/HomeCard/HomeCard";
import { ScrollView, View } from "react-native";

const HomeBody = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {homeServicesData.map((homeItem) => (
        <HomeCard key={homeItem.id} {...homeItem} />
      ))}
      <View style={styles.bottomMargin} />
    </ScrollView>
  );
};

const { styles } = useHomeBodyStyles();

export default React.memo(HomeBody);
