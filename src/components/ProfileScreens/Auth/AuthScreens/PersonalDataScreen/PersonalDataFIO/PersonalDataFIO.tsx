import React from "react";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import { useAuthFieldStyles } from "../../../AuthField/style";
import { uesPersonalDataScreenStyles } from "../styles";
import { GRAY_COLOR_41 } from "../../../../../../lib/constants/constantsColors";
import { IPersonalDataFioProps } from "../types";

const PersonalDataFio = ({
  lastname,
  firstName,
  patronymic,
  handleChangeFirstName,
  handleChangeLastname,
  handleChangePatronymic,
}: IPersonalDataFioProps) => {
  return (
    <>
      <MontserratTextSC style={styles.fieldsTitle} fontWeight={600}>
        ФИО
      </MontserratTextSC>
      <FieldInputSC
        value={lastname}
        onChange={handleChangeLastname}
        placeholder="Фамилия"
        placeholderTextColor={GRAY_COLOR_41}
      />
      <FieldInputSC
        value={firstName}
        onChange={handleChangeFirstName}
        placeholder="Имя"
        placeholderTextColor={GRAY_COLOR_41}
      />
      <FieldInputSC
        value={patronymic}
        onChange={handleChangePatronymic}
        placeholder="Отчество"
        placeholderTextColor={GRAY_COLOR_41}
      />
    </>
  );
};

const styles = uesPersonalDataScreenStyles();
const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(PersonalDataFio);
