import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { IServiceItemModel } from "../../../../lib/models/IServiceItemModel";
import SearchIcon from "../../../../assets/icon/SearchIcon.svg";
import {
  BLACK_COLOR,
  COLOR_BLACK_TWO,
} from "../../../../lib/constants/constantsColors";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import { SCREEN_WIDTH } from "../../../../lib/constants/constants";

interface ISearchItemProps extends IServiceItemModel {
  onPress: (item: IServiceItemModel) => () => void;
}

const SearchItem = ({ onPress, ...servicesItem }: ISearchItemProps) => {
  const { title } = servicesItem;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress(servicesItem)}>
      <View style={styles.searchIconContainer}>
        <SearchIcon color={BLACK_COLOR} />
      </View>
      <MontserratTextSC fontWeight={500} style={styles.text}>
        {title}
      </MontserratTextSC>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
  },
  searchIconContainer: {
    marginTop: 5,
    width: 12,
    height: 12,
    marginRight: 17,
  },
  text: {
    // padding / icon width / icon marginRight
    maxWidth: SCREEN_WIDTH - 35 - 12 - 17 - 30,
    fontSize: 16,
    lineHeight: 20,
    color: COLOR_BLACK_TWO,
  },
});

export default React.memo(SearchItem);