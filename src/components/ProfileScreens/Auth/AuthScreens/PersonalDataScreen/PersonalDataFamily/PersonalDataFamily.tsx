import React from "react";
import { View } from "react-native";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";
import { IPersonalDataFamilyProps } from "../types";

const PersonalDataFamily = ({
  family,
  handleChangeFamily,
}: IPersonalDataFamilyProps) => {
  return (
    <View>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        Состав семьи
      </MontserratTextSC>
      <FieldInputSC value={family} onChange={handleChangeFamily} />
    </View>
  );
};

const styles = uesPersonalDataScreenStyles();
const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(PersonalDataFamily);
