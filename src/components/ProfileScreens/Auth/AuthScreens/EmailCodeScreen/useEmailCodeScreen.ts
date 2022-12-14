import { useEffect, useState } from "react";
import { useModalStore } from "../../../../../hooks/useModalStore";
import { StateValueType } from "../../types";
import { useAuth } from "../../useAuth";
import { useUserStore } from "../../../../../hooks/useUserStore";
import { IEmailChangeFunction } from "../types";

export const useEmailCodeScreen = (
  email: string,
  handleChangeEmailToken: IEmailChangeFunction,
) => {
  const { handleSetError } = useAuth();
  const { handleOpenModal } = useModalStore();
  const { handleCheckEmailCode } = useUserStore();

  const [isVisibleContent, setIsVisible] = useState<boolean>(false);
  const [emailCode, setEmailCode] = useState<StateValueType>({
    value: "",
    error: "",
  });

  const handleRejectEmailCode = (message?: string) => {
    handleSetError(setEmailCode, message || "");
  };

  const handleSendCheckCode = () => {
    handleCheckEmailCode({
      code: emailCode.value,
      email: email,
      successCallback: handleChangeEmailToken,
      rejectCallback: handleRejectEmailCode,
    });
  };

  useEffect(() => {
    handleOpenModal(true, "email", () => {
      handleOpenModal(false, null);
      setIsVisible(true);
    });
  }, []);

  useEffect(() => {
    if (emailCode.value) {
      if (emailCode.error) {
        setEmailCode((prevState) => ({
          ...prevState,
          error: "",
        }));
      }
      if (emailCode.value.length === 6) {
        handleSendCheckCode();
      }
    }
  }, [emailCode.value]);

  const handlePressButton = () => {
    if (emailCode.value.length !== 6) {
      handleSetError(setEmailCode, "Код состоит из 6 цифр");
    }
    if (emailCode.value.length === 6) {
      handleSendCheckCode();
    }
  };

  return {
    emailCode,
    setEmailCode,
    isVisibleContent,
    handlePressButton,
  };
};
