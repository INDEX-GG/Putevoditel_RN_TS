import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { validatePasswordRegExp } from "../../../../../lib/services/regExp";
import { useAuth } from "../../useAuth";

export const usePasswordScreen = (
  handleConfirmPassword: (newPassword: string) => void,
) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isValidate, setIsValidate] = useState<boolean>(false);
  const { handleChangePasswordInput } = useAuth();

  const handleChangeValidate = (state: boolean) => {
    setIsValidate(state);
  };

  const handlePressButton = () => {
    if (!isValidate) {
      setError("Проверьте условия пароля");
      return;
    }
    if (password !== confirmPassword) {
      setError("Пароли не совподают");
      return;
    }
    handleConfirmPassword(password);
  };

  useEffect(() => {
    if (error) setError("");
  }, [password, confirmPassword]);

  return {
    error,
    password,
    isValidate,
    confirmPassword,
    setPassword,
    handlePressButton,
    setConfirmPassword,
    handleChangeValidate,
    handleChangePasswordInput,
  };
};
