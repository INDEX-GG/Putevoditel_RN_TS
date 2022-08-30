import React, { useCallback } from "react";
import { View, FlatList, ListRenderItemInfo } from "react-native";
import { useHomeHeaderStyles } from "../Home/HomeHeader/styles";
import SearchIcon from "../../../assets/icon/SearchIcon.svg";
import { useSearch } from "./useSearch";
import SearchItem from "./SearchItem/SearchItem";
import { ISearchData } from "../../../store/reducers/searchSlice/searchSlice";
import ServicesHeader from "../../ServicesScreens/ServicesHeader/ServicesHeader";
import { useSearchStyles } from "./styles";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";
import { useChangeBottomTab } from "../../../hooks/useChangeBottomTab";
import { useModalStore } from "../../../hooks/useModalStore";

const Search = () => {
  const {
    search,
    scrollHeight,
    filterSearchData,
    handleChangeSearch,
    handlePressSearchItem,
  } = useSearch();
  useChangeBottomTab({ isView: false });
  const { handleChangeBottomTabVisible } = useModalStore();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ISearchData>) => {
      return <SearchItem {...item} onPress={handlePressSearchItem} />;
    },
    [search],
  );

  return (
    <ScreenContainer
      isSafeAreaView={true}
      isScroll={false}
      viewProp={{
        style: { height: scrollHeight - 20 },
      }}>
      <View style={{ ...styles.container }}>
        <View style={styles.header}>
          <ServicesHeader
            title="Главная"
            onPress={() => handleChangeBottomTabVisible(true)}
          />
        </View>
        <View style={styles.searchContainer}>
          <ServicesInputSC
            value={search}
            onChange={handleChangeSearch}
            keyboardType="default"
            placeholder="Найти услугу"
            style={styles.searchInput}
            placeholderTextColor="#FFC045"
          />
          <View style={styles.searchButton}>
            <View style={styles.iconContainer}>
              <SearchIcon color="#EC7609" />
            </View>
          </View>
        </View>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={filterSearchData}
          renderItem={renderItem}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = useSearchStyles();
const { ServicesInputSC } = useHomeHeaderStyles();

export default React.memo(Search);
