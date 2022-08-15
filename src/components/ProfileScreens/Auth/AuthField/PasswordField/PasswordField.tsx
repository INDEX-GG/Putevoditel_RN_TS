import React from "react";
import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import InputPasswordUI from "../../../../../UI/InputSC/InputPasswordUI/InputPassword";
import ValidatePassword from "./ValidatePassword/ValidatePassword";
import { ValidateFunction } from "./types";

type onChangeInput = (
  e: NativeSyntheticEvent<TextInputChangeEventData>,
) => void;

interface IPasswordFieldProps {
  password: string;
  confirmPassword: string;
  handleChangePassword: onChangeInput;
  handleChangeConfirmPassword: onChangeInput;
  setIsValidate: ValidateFunction;
}

const PasswordField = ({
  password,
  confirmPassword,
  handleChangeConfirmPassword,
  handleChangePassword,
  setIsValidate,
}: IPasswordFieldProps) => {
  return (
    <View>
      <InputPasswordUI
        inputProps={{
          placeholder: "Пароль",
          value: password,
          onChange: handleChangePassword,
        }}
      />
      <ValidatePassword setIsValidate={setIsValidate} value={password} />
      <InputPasswordUI
        inputProps={{
          placeholder: "Пароль ещё раз",
          value: confirmPassword,
          onChange: handleChangeConfirmPassword,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default React.memo(PasswordField);
