import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserModel } from "../../../lib/models/IUserModel";
import { RootState } from "../../index";
import { ReducersTypes } from "../../../types/store/types";
import { fetchUserModel } from "./asyncThunk/authSliceApi";
import { FetchUserModelReturnData } from "./asyncThunk/types";

interface IInitialState {
  user: IUserModel;
}

const initialState: IInitialState = {
  user: {
    id: 0,
    uuid: "",
    email: "",
    createdAt: "0",
    address: "",
    name: "",
    surname: "",
    passport: "",
    patronymic: "",
    lastLoginAt: "",
    birthday: "",
    familyComposition: "",
    gender: "",
    emailVerified: false,
    phoneVerified: false,
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    handleChangeUserModelSlice(state, action: PayloadAction<IUserModel>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserModel.fulfilled.type,
      (state, action: PayloadAction<FetchUserModelReturnData>) => {
        if (typeof action.payload === "object") {
          state.user = action.payload;
        }
      },
    );
  },
});

const selectAuthSlice = (state: RootState) => state[ReducersTypes.AUTH_SLICE];
export const selectAuth = (state: RootState) => selectAuthSlice(state);
export const { handleChangeUserModelSlice } = authSlice.actions;

export default authSlice;
