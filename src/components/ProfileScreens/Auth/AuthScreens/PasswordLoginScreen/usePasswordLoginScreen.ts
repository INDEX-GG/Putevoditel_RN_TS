import { useEffect, useState } from "react";
import { useAuth } from "../../useAuth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParams } from "../../../../../screens/types";
import { useUserStore } from "../../../../../hooks/useUserStore";
import { useModalStore } from "../../../../../hooks/useModalStore";

export const usePasswordLoginScreen = (
  handleSubmitData: (
    password: string,
    rejectCallback: (message?: string) => void,
  ) => void,
  email: string,
) => {
  const { handleChangePasswordInput } = useAuth();
  const { handleSendEmailCode } = useUserStore();
  const { handleOpenModal } = useModalStore();
  const { navigate } = useNavigation<NavigationProp<ProfileStackParams>>();

  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  //!Press reset button (start)
  const handleFulfilledSendCode = () => {
    navigate("ResetPassword", { email: email });
  };

  const handleRejectSendCode = () => {
    setError("Ошибка отправки кода");
    handleOpenModal(false, null);
  };

  const handlePressReset = () => {
    handleOpenModal(true, "loading");
    handleSendEmailCode({
      email,
      fulfilledCallback: handleFulfilledSendCode,
      rejectCallback: handleRejectSendCode,
    });
  };
  //!Pres reset button (end)

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
