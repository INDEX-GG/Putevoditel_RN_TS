import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MontserratTextSC from "../../../../../../UI/MontserratTextSC/MontserratTextSC";
import styled from "styled-components/native";
import { ValidateFunction } from "../types";

interface IValidatePasswordProps {
  value: string;
  setIsValidate: ValidateFunction;
}

const ValidatePassword = ({ value, setIsValidate }: IValidatePasswordProps) => {
  const isMinLength = value.length >= 6;
  const isOneNumber = value.match(/[0-9]/g);
  const isMoreLowerAndUpper =
    !!value.match(/[a-z]/g) && !!value.match(/[A-Z]/g);

  useEffect(() => {
    setIsValidate(!!(isMinLength && isOneNumber && isMoreLowerAndUpper));
  }, [value]);

  return (
    <View style={styles.container}>
      <ValidateText isError={!isMinLength} fontWeight={500}>
        Минимум 6 символов
      </ValidateText>
      <ValidateText isError={!isOneNumber} fontWeight={500}>
        Как минимум одна цифра
      </ValidateText>
      <ValidateText isError={!isMoreLowerAndUpper} fontWeight={500}>
        Строчные и заглавные буквы
      </ValidateText>
    </View>
  );
};

const ValidateText = styled(MontserratTextSC)<{ isError: boolean }>`
  color: ${({ isError, theme }) =>
    isError ? theme.colors.error : theme.colors.gray41};
`;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
    marginBottom: 10,
  },
});

export default React.memo(ValidatePassword);
