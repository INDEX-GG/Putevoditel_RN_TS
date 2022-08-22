import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ISpecialistPersonalData } from "../../../../lib/models/ISpecialistData";
import PeopleIcon from "../../../../assets/icon/PeopleIcon.svg";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import { COLOR_BLACK_TWO } from "../../../../lib/constants/constantsColors";

interface ISpecialistItemProps extends ISpecialistPersonalData {
  handleOpenSpecialistScreen: (
    specialistData: ISpecialistPersonalData,
  ) => () => void;
}

const SpecialistItem = ({
  handleOpenSpecialistScreen,
  ...specialistData
}: ISpecialistItemProps) => {
  const { name } = specialistData;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleOpenSpecialistScreen(specialistData)}>
      <View style={styles.iconContainer}>
        <PeopleIcon />
      </View>
      <MontserratTextSC fontWeight={500} style={styles.text}>
        {name}
      </MontserratTextSC>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 73,
    backgroundColor: "#FFF8EC",
    marginBottom: 18,
    paddingTop: 14,
    paddingBottom: 19,
    borderRadius: 20,
    paddingHorizontal: 29,
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    backgroundColor: "red",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 20,
    height: 20,
    marginRight: 23,
  },
  text: {
    maxWidth: 195,
    color: COLOR_BLACK_TWO,
  },
});

export default React.memo(SpecialistItem);
