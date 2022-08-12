import React from "react";
import { TextInputProps, View } from "react-native";
import { useAuthFieldStyles } from "./style";

interface IAuthFieldProps {
  title: string;
  textInputProps?: TextInputProps;
  error: { isError: boolean; errorText: string };
}

const AuthField = ({ title, textInputProps = {}, error }: IAuthFieldProps) => {
  const { isError, errorText } = error;
  return (
    <View>
      <FieldTitleSC fontWeight={500}>{title}</FieldTitleSC>
      <FieldInputSC placeholderTextColor="#414141" {...textInputProps} />
      <FieldErrorSC fontWeight={500}>{isError ? errorText : " "}</FieldErrorSC>
    </View>
  );
};

const { FieldTitleSC, FieldErrorSC, FieldInputSC } = useAuthFieldStyles();

export default React.memo(AuthField);
