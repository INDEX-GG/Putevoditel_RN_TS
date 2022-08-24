import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dimensions } from "react-native";
import { RootState } from "../../index";
import { ReducersTypes } from "../../../types/store/types";

export type RotateType = "horizontal" | "vertical";

interface IInitialState {
  width: number;
  height: number;
  rotate: RotateType;
}

const initialState: IInitialState = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  rotate: "vertical",
};

const rotateSlice = createSlice({
  name: "rotateSlice",
  initialState,
  reducers: {
    handleChangeRotate(state, action: PayloadAction<IInitialState>) {
      state.width = action.payload.width;
      state.height = action.payload.height;
      state.rotate = action.payload.rotate;
    },
  },
});

const selectRotateSlice = (state: RootState) =>
  state[ReducersTypes.ROTATE_SLICE];
export const selectRotate = (state: RootState) => selectRotateSlice(state);

export const { handleChangeRotate } = rotateSlice.actions;

export default rotateSlice;
