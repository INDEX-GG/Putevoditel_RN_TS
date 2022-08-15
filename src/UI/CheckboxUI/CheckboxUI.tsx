import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MontserratTextSC from "../MontserratTextSC/MontserratTextSC";
import { GRAY_COLOR_41 } from "../../lib/constants/constantsColors";
import styled from "styled-components/native";

interface ICheckboxUIProps {
  value: boolean;
  onChange: () => void;
  label?: string;
}

const CheckboxUI = ({ value, label, onChange }: ICheckboxUIProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange}>
      <CircleBox isActive={value} />
      {label && (
        <MontserratTextSC style={styles.text} fontWeight={500}>
          {label}
        </MontserratTextSC>
      )}
    </TouchableOpacity>
  );
};

const CircleBox = styled.View<{ isActive: boolean }>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.gray41 : theme.colors.white};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray41};
`;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: GRAY_COLOR_41,
    marginLeft: 8,
  },
});

export default React.memo(CheckboxUI);
