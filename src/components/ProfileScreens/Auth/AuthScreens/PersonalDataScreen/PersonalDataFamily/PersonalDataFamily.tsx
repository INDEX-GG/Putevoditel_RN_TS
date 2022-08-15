import React from "react";
import { View } from "react-native";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";

const PersonalDataFamily = () => {
  return (
    <View>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        Состав семьи
      </MontserratTextSC>
      <FieldInputSC />
    </View>
  );
};

const styles = uesPersonalDataScreenStyles();
const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(PersonalDataFamily);
