import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";
import { TextInputChangeFunction } from "../../../../../../types/types";
import { GRAY_COLOR_41 } from "../../../../../../lib/constants/constantsColors";

interface IPersonalDataPassportProps {
  passport: string;
  handleChangePassport: TextInputChangeFunction;
}

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
