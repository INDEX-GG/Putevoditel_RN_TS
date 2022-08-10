import React, { useCallback } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import ServicesItem from "../../AnyPage/ServicesItem/ServicesItem";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { IServiceItemModel } from "../../../lib/models/IServiceItemModel";

type Props = NativeStackScreenProps<ServicesStackParams, "Services">;

const Services = ({ route, navigation }: Props) => {
  const { title, data } = route.params;
  const handlePushBack = () => navigation.goBack();

  const keyExtractor = useCallback(({ title }: IServiceItemModel) => title, []);
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IServiceItemModel>) => (
      <ServicesItem key={item.title} {...item} />
    ),
    [],
  );

  return (
    <PageContainer isSafeAreaView={true}>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <ServicesHeader title={title} handlePushBack={handlePushBack} />
          )}
        />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,
  },
});

export default React.memo(Services);
