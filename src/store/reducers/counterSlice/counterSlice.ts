import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { ReducersTypes } from "../../../types/store/types";

interface IInitialState {
  counter: number;
}

const initialState: IInitialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.counter -= action.payload;
    },
  },
});

const selectCounterState = (state: RootState) =>
  state[ReducersTypes.COUNTER_SLICE];
export const selectCounter = (state: RootState) => selectCounterState(state);
export const { increment, decrement } = counterSlice.actions;
export default counterSlice;
