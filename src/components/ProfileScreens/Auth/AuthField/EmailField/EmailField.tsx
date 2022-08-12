import React, { Dispatch, SetStateAction } from "react";
import { View, Text } from "react-native";
import AuthField from "../AuthField";
import { IS_IOS } from "../../../../../lib/constants/constants";
import { StateValueType } from "../../types";
import { useAuth } from "../../useAuth";

interface IEmailFieldProps {
  emailValue: StateValueType;
  setEmailValue: Dispatch<SetStateAction<StateValueType>>;
}

const EmailField = ({ emailValue, setEmailValue }: IEmailFieldProps) => {
  const { handleChangeInputValue } = useAuth();
  return (
    <AuthField
      title="Введите свой E-mail"
      textInputProps={{
        value: emailValue.value,
        autoCapitalize: "none",
        keyboardType: IS_IOS ? "default" : "email-address",
        onChange: handleChangeInputValue(setEmailValue),
        placeholder: "Электронная почта",
      }}
      error={{
        isError: !!emailValue.error,
        errorText: emailValue.error,
      }}
    />
  );
};

export default React.memo(EmailField);
