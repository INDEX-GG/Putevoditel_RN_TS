import { useAppSelector } from "./useAppSelector";
import { selectAuth } from "../store/reducers/authSlice/authSlice";
import { useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import {
  fetchCheckEmailCode,
  fetchCheckRegistration,
  fetchLoginUser,
  fetchRegistrationUser,
  fetchSendEmailCode,
  fetchUserModel,
} from "../store/reducers/authSlice/asyncThunk/authSliceApi";
import {
  FetchUserModelDataType,
  ICheckEmailCode,
  IEmail,
  INewRegisterUser,
  IUserLogin,
} from "../store/reducers/authSlice/asyncThunk/types";

export const useUserStore = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);
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

  return {
    user,
    isAuth,
    handleLoginUser,
    handleGetUserModel,
    handleSendEmailCode,
    handleCheckEmailCode,
    handleRegistrationUser,
    handleCheckRegistration,
  };
};
