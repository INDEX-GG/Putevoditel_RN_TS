import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";

const PersonalDataBirthday = () => {
  return (
    <>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        Дата рождения
      </MontserratTextSC>
      <FieldInputSC />
    </>
  );
};

const styles = uesPersonalDataScreenStyles();
const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(PersonalDataBirthday);
