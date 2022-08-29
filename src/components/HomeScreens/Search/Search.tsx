import React, { useCallback } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { useHomeHeaderStyles } from "../Home/HomeHeader/styles";
import SearchIcon from "../../../assets/icon/SearchIcon.svg";
import { useSearch } from "./useSearch";
import SearchItem from "./SearchItem/SearchItem";
import { ISearchData } from "../../../store/reducers/searchSlice/searchSlice";
import ServicesHeader from "../../ServicesScreens/ServicesHeader/ServicesHeader";
import { useSearchStyles } from "./styles";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";

const Search = () => {
  const {
    search,
    filterSearchData,
    handleChangeSearch,
    handlePressSearchItem,
  } = useSearch();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ISearchData>) => {
      return <SearchItem {...item} onPress={handlePressSearchItem} />;
    },
    [search],
  );

  return (
    <ScreenContainer isSafeAreaView={true} isScroll={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ServicesHeader title="Главная" />
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
