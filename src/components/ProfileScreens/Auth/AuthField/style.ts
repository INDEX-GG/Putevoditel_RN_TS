import styled, { css } from "styled-components/native";
import { StyleSheet } from "react-native";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import InputSC from "../../../../UI/InputSC/InputSC";
import { IS_ANDROID } from "../../../../lib/constants/constants";
import { BLACK_COLOR } from "../../../../lib/constants/constantsColors";

const FieldTitleSC = styled(MontserratTextSC)`
  color: #2c2c2c;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: center;
`;

const AndroidDisableScrollCSS = css`
  padding-bottom: 0;
  padding-top: 0;
`;

const FieldInputSC = styled(InputSC)`
  flex: none;
  height: 49px;
  overflow: hidden;
  width: 288px;
  color: ${BLACK_COLOR};
  background-color: #fff8ec;
  margin-bottom: 10px;
  ${() => IS_ANDROID && AndroidDisableScrollCSS}
`;

const FieldErrorSC = styled(MontserratTextSC)`
  color: #ff6565;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 19px;
  text-align: center;
  max-width: 300px;
`;

const styles = StyleSheet.create({});

export const useAuthFieldStyles = () => ({
  styles,
  FieldInputSC,
  FieldTitleSC,
  FieldErrorSC,
});
