import { useState } from "react";
import { TypesResetPasswordProps } from "./types";
import { useUserStore } from "../../../../hooks/useUserStore";
import { useModalStore } from "../../../../hooks/useModalStore";

export const useResetPassword = ({
  route,
  navigation,
}: TypesResetPasswordProps) => {
  const {
    params: { email },
  } = route;
  const { handleResetPassword } = useUserStore();
  const { handleOpenModal } = useModalStore();

  const [emailToken, setEmailToken] = useState<string>("");
  const [resetStep, setResetStep] = useState<"email-code" | "new-password">(
    "email-code",
  );

  //!EmailCode step (start)
  const handleClickBackEmailCode = () => {
    navigation.goBack();
  };

  const handleChangeEmailToken = (token: string) => {
    if (token) {
      setEmailToken(token);
      setResetStep("new-password");
    }
  };
  //!EmailCode step (end)

  //!Password step (start)
  const handlePressBackPassword = () => {
    navigation.goBack();
  };

  const handleFulfilledResetPassword = () => {
    navigation.navigate("Profile");
    handleOpenModal(false, null);
  };

  const handleChangePassword = (password: string) => {
    handleOpenModal(true, "loading");
    handleResetPassword({
      email,
      password,
      emailToken,
      fulfilledCallback: handleFulfilledResetPassword,
      rejectCallback: (message) => {
        handleOpenModal(true, "loading");
      },
    });
  };
  //!Password step (end)

  return {
    email,
    resetStep,
    emailToken,
    handleChangePassword,
    handleChangeEmailToken,
    handlePressBackPassword,
    handleClickBackEmailCode,
  };
};
