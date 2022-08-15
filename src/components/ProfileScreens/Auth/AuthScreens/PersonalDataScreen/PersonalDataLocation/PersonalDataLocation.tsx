import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";
import { TextInputChangeFunction } from "../../../../../../types/types";
import { GRAY_COLOR_41 } from "../../../../../../lib/constants/constantsColors";

interface IPersonalDataLocationProps {
  address: string;
  handleChangeAddress: TextInputChangeFunction;
}

const PersonalDataLocation = ({
  address,
  handleChangeAddress,
}: IPersonalDataLocationProps) => {
  return (
    <>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        Регистрация по месту жительства (пребывания)
      </MontserratTextSC>
      <FieldInputSC
        placeholder="Адрес"
        placeholderTextColor={GRAY_COLOR_41}
        value={address}
        onChange={handleChangeAddress}
      />
    </>
  );
};

const styles = uesPersonalDataScreenStyles();
const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(PersonalDataLocation);
