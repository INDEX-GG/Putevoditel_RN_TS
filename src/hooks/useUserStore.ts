import { useAppSelector } from "./useAppSelector";
import {
  handleResetUser,
  selectAuth,
} from "../store/reducers/authSlice/authSlice";
import { useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import {
  fetchCheckEmailCode,
  fetchCheckRegistration,
  fetchLoginUser,
  fetchRegistrationUser,
  fetchResetPassword,
  fetchSendEmailCode,
  fetchUserModel,
  fetchUserUpdate,
} from "../store/reducers/authSlice/asyncThunk/authSliceApi";
import {
  FetchUserModelDataType,
  ICheckEmailCode,
  IEmail,
  INewRegisterUser,
  IResetPasswordData,
  IUserLogin,
  UserUpdateDataType,
} from "../store/reducers/authSlice/asyncThunk/types";
import { useAsyncStorage } from "./useAsyncStorage";
import { useModalStore } from "./useModalStore";

export const useUserStore = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);
  const { handleDeleteAsyncStorage } = useAsyncStorage();
  const { handleOpenModal } = useModalStore();
  const isAuth = useMemo(() => !!user?.id, [user]);

  const handleCheckRegistration = (data: IEmail) => {
    dispatch(fetchCheckRegistration(data));
  };

  const handleSendEmailCode = (data: IEmail) => {
    dispatch(fetchSendEmailCode(data));
  };

  const handleCheckEmailCode = (data: ICheckEmailCode) => {
    dispatch(fetchCheckEmailCode(data));
  };

  const handleRegistrationUser = (data: INewRegisterUser) => {
    dispatch(fetchRegistrationUser(data));
  };

  const handleLoginUser = (data: IUserLogin) => {
    dispatch(fetchLoginUser(data));
  };

  const handleGetUserModel = (data: FetchUserModelDataType) => {
    dispatch(fetchUserModel(data));
  };

  const handleResetPassword = (data: IResetPasswordData) => {
    dispatch(fetchResetPassword(data));
  };

  const handleUpdateUser = (data: UserUpdateDataType) => {
    dispatch(fetchUserUpdate(data));
  };

  const handleLogoutUser = () => {
    try {
      handleDeleteAsyncStorage("@accessToken").then(() => {
        handleDeleteAsyncStorage("@user").then(() => {
          dispatch(handleResetUser());
          handleOpenModal(false, null);
        });
      });
    } catch (e) {
      throw new Error("Ошибка выхода");
    }
  };

  return {
    user,
    isAuth,
    handleLoginUser,
    handleUpdateUser,
    handleLogoutUser,
    handleResetPassword,
    handleGetUserModel,
    handleSendEmailCode,
    handleCheckEmailCode,
    handleRegistrationUser,
    handleCheckRegistration,
  };
};
