import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { uesPersonalDataScreenStyles } from "../styles";
import { StyleSheet, View } from "react-native";
import CheckboxUI from "../../../../../../UI/CheckboxUI/CheckboxUI";
import { UserSexType } from "../../../../../../types/types";

interface IPersonalDataSexProps {
  sex: UserSexType;
  handleChangeSex: (state: UserSexType) => () => void;
}

const PersonalDataSex = ({ sex, handleChangeSex }: IPersonalDataSexProps) => {
  return (
    <>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        Пол
      </MontserratTextSC>
      <View style={sexStyles.checkboxContainer}>
        <CheckboxUI
          value={sex === "male"}
          label="Мужчина"
          onChange={handleChangeSex("male")}
        />
        <CheckboxUI
          value={sex === "female"}
          label="Женщина"
          onChange={handleChangeSex("female")}
        />
      </View>
    </>
  );
};

const sexStyles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 42,
    paddingHorizontal: 15,
  },
});
const styles = uesPersonalDataScreenStyles();

export default React.memo(PersonalDataSex);
