import { useAppSelector } from "./useAppSelector";
import { selectAuth } from "../store/reducers/authSlice/authSlice";
import { useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import {
  fetchCheckEmailCode,
  fetchCheckRegistration,
  fetchSendEmailCode,
  ICheckEmailCode,
  IEmail,
} from "../store/reducers/authSlice/asyncThunk/authSliceApi";

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

  return {
    user,
    isAuth,
    handleSendEmailCode,
    handleCheckEmailCode,
    handleCheckRegistration,
  };
};
