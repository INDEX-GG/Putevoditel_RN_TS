import React, { ReactNode } from "react";
import { TextInputProps, View } from "react-native";
import { useAuthFieldStyles } from "./style";
import { GRAY_COLOR_41 } from "../../../../lib/constants/constantsColors";

interface IAuthFieldProps {
  title: string;
  error?: { isError: boolean; errorText: string };
  children?: ReactNode;
  textInputProps?: TextInputProps;
}

const AuthField = ({
  title,
  children,
  textInputProps = {},
  error = { isError: false, errorText: "" },
}: IAuthFieldProps) => {
  const { isError, errorText } = error;
  return (
    <View>
      <FieldTitleSC fontWeight={500}>{title}</FieldTitleSC>
      {children ? (
        children
      ) : (
        <FieldInputSC
          placeholderTextColor={GRAY_COLOR_41}
          {...textInputProps}
        />
      )}
      <FieldErrorSC fontWeight={500}>{isError ? errorText : " "}</FieldErrorSC>
    </View>
  );
};

const { FieldTitleSC, FieldErrorSC, FieldInputSC } = useAuthFieldStyles();

export default React.memo(AuthField);
