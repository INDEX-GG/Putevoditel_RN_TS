import styled from "styled-components/native";
import { TextInputProps } from "react-native";
import React from "react";

const InputSC: React.FC<TextInputProps> = styled.TextInput`
  flex: 1;
  height: 100%;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.blackTwo}
  padding: 15px 26px;
  border-radius: 32.5px;
`;

export default InputSC;
