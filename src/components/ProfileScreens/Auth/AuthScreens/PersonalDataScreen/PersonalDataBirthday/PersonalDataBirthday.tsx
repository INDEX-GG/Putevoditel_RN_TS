import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";
import { GRAY_COLOR_41 } from "../../../../../../lib/constants/constantsColors";
import { IPersonalDataBirthdayProps } from "../types";

const PersonalDataBirthday = ({
  birthday,
  handleChangeBirthday,
}: IPersonalDataBirthdayProps) => {
  return (
    <>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        Дата рождения
      </MontserratTextSC>
      <FieldInputSC
        value={birthday}
        placeholder="ДД.ММ.ГГГГ"
        keyboardType="numeric"
        onChange={handleChangeBirthday}
        placeholderTextColor={GRAY_COLOR_41}
      />
    </>
  );
};

const styles = uesPersonalDataScreenStyles();
const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(PersonalDataBirthday);
