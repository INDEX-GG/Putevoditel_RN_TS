import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dimensions } from "react-native";
import { RootState } from "../../index";
import { ReducersTypes } from "../../../types/store/types";

interface IInitialState {
  width: number;
  height: number;
}

const initialState: IInitialState = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const orientationSlice = createSlice({
  name: "orientationSlice",
  initialState,
  reducers: {
    changeOrientation(
      state,
      action: PayloadAction<Pick<IInitialState, "width" | "height">>,
    ) {
      state.height = action.payload.height;
      state.width = action.payload.width;
    },
  },
});

const selectOrientationSlice = (state: RootState) =>
  state[ReducersTypes.ORIENTATION_SLICE];
export const selectOrientation = (state: RootState) =>
  selectOrientationSlice(state);
export const { changeOrientation } = orientationSlice.actions;

export default orientationSlice;
