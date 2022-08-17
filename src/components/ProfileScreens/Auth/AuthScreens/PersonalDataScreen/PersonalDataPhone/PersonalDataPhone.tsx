import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";
import { GRAY_COLOR_41 } from "../../../../../../lib/constants/constantsColors";
import { IPersonalDataPhoneProps } from "../types";

const PersonalDataPhone = ({
  phone,
  handleChangePhone,
}: IPersonalDataPhoneProps) => {
  return (
    <>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        Номер телефона
      </MontserratTextSC>
      <FieldInputSC
        placeholder="+7"
        keyboardType="phone-pad"
        placeholderTextColor={GRAY_COLOR_41}
        value={phone}
        onChange={handleChangePhone}
      />
    </>
  );
};

const styles = uesPersonalDataScreenStyles();
const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(PersonalDataPhone);
