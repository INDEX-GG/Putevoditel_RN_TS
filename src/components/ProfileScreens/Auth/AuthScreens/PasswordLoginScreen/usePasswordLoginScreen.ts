import { useEffect, useState } from "react";
import { useAuth } from "../../useAuth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParams } from "../../../../../screens/types";

export const usePasswordLoginScreen = (
  handleSubmitData: (
    password: string,
    rejectCallback: (message?: string) => void,
  ) => void,
) => {
  const { handleChangePasswordInput } = useAuth();
  const { navigate } = useNavigation<NavigationProp<ProfileStackParams>>();
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handlePressReset = () => navigate("ResetPassword");

  const handleRejectLogin = (message?: string) => {
    if (message) {
      setError(message);
    }
  };

  const handleSubmit = () => {
    if (password) {
      setError("");
      handleSubmitData(password, handleRejectLogin);
      return;
    }
    setError("Заполните поле");
  };

  useEffect(() => {
    if (error) setError("");
  }, [password]);

  return {
    error,
    password,
    setPassword,
    handleSubmit,
    handlePressReset,
    handleChangePasswordInput,
  };
};
