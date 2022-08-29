import React from "react";
import { useResetPassword } from "./useResetPassword";
import EmailCodeScreen from "../AuthScreens/EmailCodeScreen/EmailCodeScreen";
import { TypesResetPasswordProps } from "./types";
import PasswordScreen from "../AuthScreens/PasswordScreen/PasswordScreen";
import { useChangeBottomTab } from "../../../../hooks/useChangeBottomTab";
import { useLayout } from "../../../../hooks/useLayout";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";

const ResetPassword = (props: TypesResetPasswordProps) => {
  useLayout({ newHeight: 100, newBackground: WHITE_COLOR });
  useChangeBottomTab({ isView: true });
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
