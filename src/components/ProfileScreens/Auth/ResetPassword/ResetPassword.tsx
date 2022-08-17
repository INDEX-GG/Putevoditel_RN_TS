import React from "react";
import { useResetPassword } from "./useResetPassword";
import EmailCodeScreen from "../AuthScreens/EmailCodeScreen/EmailCodeScreen";
import { TypesResetPasswordProps } from "./types";
import PasswordScreen from "../AuthScreens/PasswordScreen/PasswordScreen";

const ResetPassword = (props: TypesResetPasswordProps) => {
  const {
    resetStep,
    email,
    handleChangePassword,
    handleChangeEmailToken,
    handlePressBackPassword,
    handleClickBackEmailCode,
  } = useResetPassword(props);
  switch (resetStep) {
    case "email-code":
      return (
        <EmailCodeScreen
          email={email}
          headerTitle="Восстановление пароля"
          handlePressBack={handleClickBackEmailCode}
          handleChangeEmailToken={handleChangeEmailToken}
        />
      );
    case "new-password":
      return (
        <PasswordScreen
          headerTitle="Восстановление пароля"
          defaultPassword=""
          handlePressBack={handlePressBackPassword}
          handleConfirmPassword={handleChangePassword}
        />
      );
  }
};

export default React.memo(ResetPassword);
