import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import { IS_IOS, SCREEN_HEIGHT } from "../../../lib/constants/constants";
import { WHITE_COLOR } from "../../../lib/constants/constantsColors";
import { useHomeHeaderStyles } from "../Home/HomeHeader/styles";
import SearchIcon from "../../../assets/icon/SearchIcon.svg";
import { useSearch } from "./useSearch";
import SearchItem from "./SearchItem/SearchItem";
import { ISearchData } from "../../../store/reducers/searchSlice/searchSlice";

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
    <PageContainer
      isSafeAreaView={true}
      paddingTop={IS_IOS ? 0 : 36}
      height={`${SCREEN_HEIGHT}`}
      backgroundColor={WHITE_COLOR}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <ServicesInputSC
            value={search}
            onChange={handleChangeSearch}
            keyboardType="default"
            placeholder="Найти услугу"
            style={styles.searchInput}
            placeholderTextColor="#FFC045"
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => console.log(123)}>
            <View style={styles.iconContainer}>
              <SearchIcon color="#EC7609" />
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={filterSearchData}
          renderItem={renderItem}
        />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 18,
  },
  scrollContainer: {
    paddingHorizontal: 18,
  },
  searchInput: {
    paddingRight: 65,
    paddingBottom: 0,
    paddingTop: 0,
  },
  searchContainer: {
    position: "relative",
    minHeight: 45,
    marginBottom: 10,
  },
  iconContainer: {
    width: 30,
    height: 30,
  },
  searchButton: {
    position: "absolute",
    top: 7,
    right: 0,
    width: 50,
  },
  flatListContainer: {
    paddingHorizontal: 17,
  },
});

const { ServicesInputSC } = useHomeHeaderStyles();

export default React.memo(Search);
