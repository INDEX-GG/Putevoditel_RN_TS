import React, { useEffect } from "react";
import { useAsyncStorage } from "../hooks/useAsyncStorage";
import { useUserStore } from "../hooks/useUserStore";
import { handleChangeUserModelSlice } from "../store/reducers/authSlice/authSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";

const UserAutoLogin = () => {
  const { handleGetAsyncStorage, handleDeleteAsyncStorage } = useAsyncStorage();
  const { handleGetUserModel } = useUserStore();
  const dispatch = useAppDispatch();

  const handleDeleteUserInAsyncStorage = () => {
    try {
      handleDeleteAsyncStorage("@accessToken").then(() => {
        handleDeleteAsyncStorage("@user").then(() => {
          throw new Error("Удаление пользователя из локального хранилища");
        });
      });
    } catch (e) {
      throw new Error("Ошибка удаления пользователя из локального хранилища");
    }
  };

  const handleOfflineAutoLogin = (message?: string) => {
    if (message === "ERR_NETWORK") {
      handleGetAsyncStorage("@user").then((userModel) => {
        if (userModel) {
          try {
            dispatch(handleChangeUserModelSlice(JSON.parse(userModel)));
          } catch (e) {
            handleDeleteUserInAsyncStorage();
          }
        }
      });
    }
    if (message === "User not Found") {
      handleDeleteUserInAsyncStorage();
    }
  };

  const handleDefaultAutoLogin = () => {
    handleGetAsyncStorage("@accessToken").then((accessToken) => {
      if (accessToken) {
        handleGetUserModel({
          accessToken,
          rejectCallback: handleOfflineAutoLogin,
        });
      }
    });
  };

  useEffect(() => {
    handleDefaultAutoLogin();
  }, []);

  return null;
};

export default React.memo(UserAutoLogin);
