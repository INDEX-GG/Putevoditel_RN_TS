import React, { useCallback } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import ServicesItem from "../../AnyPage/ServicesItem/ServicesItem";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { IServiceItemModel } from "../../../lib/models/IServiceItemModel";
import { PushServiceInnerType } from "../../../types/types";
import { SCREEN_HEIGHT } from "../../../lib/constants/constants";

type Props = NativeStackScreenProps<ServicesStackParams, "Services">;

const Services = ({ route, navigation }: Props) => {
  const { title, data } = route.params;

  const handlePush: PushServiceInnerType =
    (item: IServiceItemModel, data) => () => {
      if (data) {
        navigation.push("Services", {
          title: item.title,
          data: data || [],
        });
        return;
      }
      if (!data) {
        navigation.push("ServicesTextInfo", {
          title: item.title,
          description: item.description || "",
          specialistData: item.specialistData,
        });
      }
    };

  const keyExtractor = useCallback(({ title }: IServiceItemModel) => title, []);
  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<IServiceItemModel>) => (
      <ServicesItem
        key={`${item.title}${index}`}
        {...item}
        handePush={handlePush}
      />
    ),
    [],
  );

  return (
    <PageContainer
      isSafeAreaView={true}
      paddingHorizontal={29}
      paddingTop={10}
      height={`${SCREEN_HEIGHT - 70}`}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <ServicesHeader title={title} />
          </View>
        )}
      />
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 17,
  },
});

export default React.memo(Services);
