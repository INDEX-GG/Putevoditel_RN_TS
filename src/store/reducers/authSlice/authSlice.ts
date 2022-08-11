import { createSlice } from "@reduxjs/toolkit";
import { IUserModel } from "../../../lib/models/IUserModel";
import { RootState } from "../../index";
import { ReducersTypes } from "../../../types/store/types";

interface IInitialState {
  user: IUserModel | null;
}

const initialState: IInitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: {},
});

const selectAuthSlice = (state: RootState) => state[ReducersTypes.AUTH_SLICE];
export const selectAuth = (state: RootState) => selectAuthSlice(state);

export default authSlice;
