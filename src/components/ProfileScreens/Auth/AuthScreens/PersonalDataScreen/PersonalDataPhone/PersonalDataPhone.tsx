import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";
import { TextInputChangeFunction } from "../../../../../../types/types";
import { GRAY_COLOR_41 } from "../../../../../../lib/constants/constantsColors";

interface IPersonalDataPhoneProps {
  phone: string;
  handleChangePhone: TextInputChangeFunction;
}

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
