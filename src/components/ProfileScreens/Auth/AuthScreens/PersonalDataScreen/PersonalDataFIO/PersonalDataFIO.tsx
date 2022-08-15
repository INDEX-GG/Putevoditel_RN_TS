import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";
import { GRAY_COLOR_41 } from "../../../../../../lib/constants/constantsColors";

const PersonalDataFio = () => {
  return (
    <>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        ФИО
      </MontserratTextSC>
      <FieldInputSC
        placeholder="Фамилия"
        placeholderTextColor={GRAY_COLOR_41}
      />
      <FieldInputSC placeholder="Имя" placeholderTextColor={GRAY_COLOR_41} />
      <FieldInputSC
        placeholder="Отчество"
        placeholderTextColor={GRAY_COLOR_41}
      />
    </>
  );
};

const styles = uesPersonalDataScreenStyles();
const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(PersonalDataFio);
