import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { StateValueType } from "../types";
import { useUserStore } from "../../../../hooks/useUserStore";
import { useAuth } from "../useAuth";
import {
  IEmailCodeScreenProps,
  IEmailScreenProps,
  IPasswordScreenProps,
  IPersonalDataScreenProps,
} from "../AuthScreens/types";
import { useModalStore } from "../../../../hooks/useModalStore";
import { INewRegisterUserData } from "../../../../store/reducers/authSlice/asyncThunk/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParams } from "../../../../screens/types";

type SignUpStep = "email" | "email-code" | "password" | "personal-data";

export const useSignUp = () => {
  const {
    handleSendEmailCode,
    handleRegistrationUser,
    handleCheckRegistration,
  } = useUserStore();
  const { navigate } = useNavigation<NavigationProp<ProfileStackParams>>();
  const { handleSetError, handleSubmitEmail } = useAuth();
  const [signUpStep, setSignUpStep] = useState<SignUpStep>("email");
  const [emailToken, setEmailToken] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleOpenModal } = useModalStore();

  //! Email - step (start)
  const [emailValue, setEmailValue] = useState<StateValueType>({
    value: "",
    error: "",
  });

  const handleSubmitEmailFulfilled = () => {
    setSignUpStep("email-code");
  };

  const handleSubmitEmailReject = (message?: string) => {
    if (message) {
      handleSetError(setEmailValue, message);
      handleOpenModal(false, null);
    }
  };

  // Отправка почты
  const handleSubmitEmailCode = () => {
    const email = emailValue.value;
    handleCheckRegistration({
      email,
      fulfilledCallback: () =>
        handleSetError(
          setEmailValue,
          "Пользователь с такой почтой уже зарегестрирован",
        ),
      rejectCallback: () =>
        handleSubmitEmail(emailValue, setEmailValue, () => {
          handleOpenModal(true, "loading");
          handleSendEmailCode({
            email,
            fulfilledCallback: handleSubmitEmailFulfilled,
            rejectCallback: handleSubmitEmailReject,
          });
        }),
    });
  };

  const emailComponentProps: IEmailScreenProps = useMemo(
    () => ({
      emailValue: emailValue,
      setEmailValue: setEmailValue,
      handleSubmitEmailCode: handleSubmitEmailCode,
    }),
    [emailValue],
  );
  //! Email step (end)

  //! EmailCode step (start)
  const handlePressBackEmailCode = () => {
    setSignUpStep("email");
  };

  const handleChangeEmailToken = (token: string) => {
    if (token) {
      setEmailToken(token);
      setSignUpStep("password");
    }
  };

  const emailCodeComponentProps: IEmailCodeScreenProps = useMemo(
    () => ({
      email: emailValue.value,
      headerTitle: "Регистрация",
      handlePressBack: handlePressBackEmailCode,
      handleChangeEmailToken: handleChangeEmailToken,
    }),
    [emailValue.value],
  );
  //! EmailCode step (end)

  //! Password step (start)
  const handlePressBackPassword = () => {
    setSignUpStep("email");
    setPassword("");
  };

  const handleChangePassword = (newPassword: string) => {
    setPassword(newPassword);
    setSignUpStep("personal-data");
  };

  const passwordComponentProps: IPasswordScreenProps = useMemo(
    () => ({
      headerTitle: "Регистрация",
      defaultPassword: password,
      handlePressBack: handlePressBackPassword,
      handleConfirmPassword: handleChangePassword,
    }),
    [emailValue.value, password],
  );

  //! Password step (end)

  //! Personal-data step (start)
  const handlePressBackPersonalData = () => {
    setSignUpStep("password");
  };

  const handleFulfilledRegistration = () => {
    navigate("Profile");
    handleOpenModal(false, "loading");
  };

  const handleRejectRegistration = (
    message: string,
    setError: Dispatch<SetStateAction<string>>,
  ) => {
    if (message) {
      setError(message);
    }
    handleOpenModal(false, "loading");
  };

  const handleRegisterUser = (personalData: INewRegisterUserData) => {
    const { setError, ...otherData } = personalData;
    handleOpenModal(true, "loading");
    handleRegistrationUser({
      ...otherData,
      email: emailValue.value,
      password,
      emailToken,
      fulfilledCallback: handleFulfilledRegistration,
      rejectCallback: (message) =>
        handleRejectRegistration(message || "", setError),
    });
  };

  const personalDataComponentProps = {
    handlePressBack: handlePressBackPersonalData,
    handleRegisterUser: handleRegisterUser,
  } as IPersonalDataScreenProps;

  //! Personal-data step (end)
  return {
    emailToken,
    signUpStep,
    emailValue,
    emailComponentProps,
    passwordComponentProps,
    emailCodeComponentProps,
    personalDataComponentProps,
  };
};
