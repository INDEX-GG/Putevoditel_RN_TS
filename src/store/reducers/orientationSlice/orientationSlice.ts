import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dimensions } from "react-native";
import { RootState } from "../../index";
import { ReducersTypes } from "../../../types/store/types";
import { WHITE_COLOR } from "../../../lib/constants/constantsColors";

interface IInitialState {
  width: number;
  height: number;
  layoutHeight: number;
  layoutBackground: string;
}

const initialState: IInitialState = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  layoutHeight: 0,
  layoutBackground: WHITE_COLOR,
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
    changeLayout(
      state,
      action: PayloadAction<
        Pick<IInitialState, "layoutBackground" | "layoutHeight">
      >,
    ) {
      state.layoutHeight = action.payload.layoutHeight;
      state.layoutBackground = action.payload.layoutBackground;
    },
  },
});

const selectOrientationSlice = (state: RootState) =>
  state[ReducersTypes.ORIENTATION_SLICE];
export const selectOrientation = (state: RootState) =>
  selectOrientationSlice(state);
export const { changeOrientation, changeLayout } = orientationSlice.actions;

export default orientationSlice;
