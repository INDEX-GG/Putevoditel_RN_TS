import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import InputSC from "../../../../UI/InputSC/InputSC";

const FieldTitleSC = styled(MontserratTextSC)`
  color: #2c2c2c;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: center;
`;

const FieldInputSC = styled(InputSC)`
  flex: none;
  height: 49px;
  min-width: 288px;
  background-color: #fff8ec;
  margin-bottom: 10px;
`;

const FieldErrorSC = styled(MontserratTextSC)`
  color: #ff6565;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 19px;
  text-align: center;
`;

const styles = StyleSheet.create({});

export const useAuthFieldStyles = () => ({
  styles,
  FieldInputSC,
  FieldTitleSC,
  FieldErrorSC,
});
