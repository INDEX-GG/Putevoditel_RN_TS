import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { uesPersonalDataScreenStyles } from "../styles";

const PersonalDataSex = () => {
  return (
    <>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        Пол
      </MontserratTextSC>
    </>
  );
};

const styles = uesPersonalDataScreenStyles();

export default React.memo(PersonalDataSex);
