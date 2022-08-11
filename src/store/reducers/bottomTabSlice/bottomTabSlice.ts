import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { ReducersTypes } from "../../../types/store/types";

interface IInitialState {
  isVisibleTabBar: boolean;
}

const initialState: IInitialState = {
  isVisibleTabBar: true,
};

const bottomTabSlice = createSlice({
  name: "bottomTabSlice",
  initialState,
  reducers: {
    handleChangeVisibleBottomTab(state, action: PayloadAction<boolean>) {
      state.isVisibleTabBar = action.payload;
    },
  },
});

const selectBottomTabSlice = (state: RootState) =>
  state[ReducersTypes.BOTTOM_TAB];
export const selectBottomTab = (state: RootState) =>
  selectBottomTabSlice(state);
export const { handleChangeVisibleBottomTab } = bottomTabSlice.actions;
export default bottomTabSlice;
