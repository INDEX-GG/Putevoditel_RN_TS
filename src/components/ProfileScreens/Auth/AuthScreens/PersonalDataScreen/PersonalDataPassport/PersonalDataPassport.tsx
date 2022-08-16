import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";
import { GRAY_COLOR_41 } from "../../../../../../lib/constants/constantsColors";
import { IPersonalDataPassportProps } from "../types";

const PersonalDataPassport = ({
  passport,
  handleChangePassport,
}: IPersonalDataPassportProps) => {
  return (
    <>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        Паспортные данные
      </MontserratTextSC>
      <FieldInputSC
        value={passport}
        keyboardType="numeric"
        onChange={handleChangePassport}
        placeholder="Серия и номер"
        placeholderTextColor={GRAY_COLOR_41}
      />
    </>
  );
};

const styles = uesPersonalDataScreenStyles();
const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(PersonalDataPassport);
