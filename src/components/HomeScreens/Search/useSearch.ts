import { useMemo, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useSearchStore } from "../../../hooks/useSearchStore";
import { IServiceItemModel } from "../../../lib/models/IServiceItemModel";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../../screens/types";

export const useSearch = () => {
  const { searchData } = useSearchStore();
  const [search, setSearch] = useState<string>("");
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  const filterSearchData = useMemo(() => {
    if (search) {
      return searchData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase().trim()),
      );
    }
    return searchData;
  }, [search, searchData]);

  const handleChangeSearch = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setSearch(e.nativeEvent.text);
  };

  const handlePressSearchItem = (servicesItem: IServiceItemModel) => {
    return () => {
      if (servicesItem.children) {
        navigation.navigate("ServicesStack", {
          screen: "Services",
          params: {
            title: servicesItem.title,
            data: servicesItem.children,
            isSearch: true,
          },
        });
        return;
      }
      navigation.navigate("ServicesStack", {
        screen: "ServicesTextInfo",
        params: {
          title: servicesItem.title,
          description: servicesItem.description || "",
          specialistData: servicesItem.specialistData,
          isSearch: true,
        },
      });
    };
  };

  return {
    search,
    filterSearchData,
    handleChangeSearch,
    handlePressSearchItem,
  };
};
