import { useAppSelector } from "./useAppSelector";
import { selectAuth } from "../store/reducers/authSlice/authSlice";
import { useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";
import {
  fetchCheckRegistration,
  ICheckRegistration,
} from "../store/reducers/authSlice/asyncThunk/authSliceApi";

export const useUserStore = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);
  const isAuth = useMemo(() => !!user?.id, [user]);

  const handleCheckRegistration = (data: ICheckRegistration) => {
    dispatch(fetchCheckRegistration(data));
  };

  return {
    user,
    isAuth,
    handleCheckRegistration,
  };
};
