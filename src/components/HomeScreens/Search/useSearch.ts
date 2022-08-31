import { useEffect, useMemo, useState } from "react";
import {
  Keyboard,
  KeyboardEvent,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { useSearchStore } from "../../../hooks/useSearchStore";
import {
  IServiceItemModel,
  IServiceItemModelFile,
} from "../../../lib/models/IServiceItemModel";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../../screens/types";
import { useOrientationStore } from "../../../hooks/useOrientationStore";

export const useSearch = () => {
  const { searchData } = useSearchStore();
  const { SCREEN_HEIGHT } = useOrientationStore();
  const [search, setSearch] = useState<string>("");
  const [scrollHeight, setScrollHeight] = useState<number>(SCREEN_HEIGHT);
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
          file: servicesItem.file as IServiceItemModelFile,
          isSearch: true,
        },
      });
    };
  };

  const handleChangeHeight = (e: KeyboardEvent) => {
    setScrollHeight(Math.floor(SCREEN_HEIGHT - e.endCoordinates.height));
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleChangeHeight);
    Keyboard.addListener("keyboardDidHide", handleChangeHeight);
    return () => {
      Keyboard.removeListener("keyboardDidShow", handleChangeHeight);
      Keyboard.removeListener("keyboardDidHide", handleChangeHeight);
    };
  }, []);

  return {
    search,
    scrollHeight,
    filterSearchData,
    handleChangeSearch,
    handlePressSearchItem,
  };
};
