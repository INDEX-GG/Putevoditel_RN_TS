import React, { useCallback } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import ServicesItem from "../../AnyPage/ServicesItem/ServicesItem";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { IServiceItemModel } from "../../../lib/models/IServiceItemModel";
import { PushServiceInnerType } from "../../../types/types";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";
import { WHITE_COLOR } from "../../../lib/constants/constantsColors";
import { useChangeBottomTab } from "../../../hooks/useChangeBottomTab";

type Props = NativeStackScreenProps<ServicesStackParams, "Services">;

const Services = ({ route, navigation }: Props) => {
  useChangeBottomTab({ isView: true });
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
    <ScreenContainer isScroll={false} viewProp={{ style: styles.container }}>
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
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,
  },
  headerContainer: {
    backgroundColor: WHITE_COLOR,
    marginBottom: 17,
  },
});

export default React.memo(Services);
