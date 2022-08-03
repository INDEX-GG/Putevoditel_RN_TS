import { combineReducers } from "redux";
import { ReducersTypes } from "../types/store/types";
import counterSlice from "./reducers/counterSlice/counterSlice";

export const rootReducer = combineReducers({
  [ReducersTypes.COUNTER_SLICE]: counterSlice.reducer,
});
