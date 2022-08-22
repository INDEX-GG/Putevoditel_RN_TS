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

  const handlePush: PushServiceInnerType = (title, data) => () => {
    if (data) {
      navigation.push("Services", {
        title,
        data: data || [],
      });
      return;
    }
    if (!data) {
      navigation.push("ServicesTextInfo", {
        title,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
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
