import { combineReducers } from "redux";
import { ReducersTypes } from "../types/store/types";
import bottomTabSlice from "./reducers/bottomTabSlice/bottomTabSlice";

export const rootReducer = combineReducers({
  [ReducersTypes.BOTTOM_TAB]: bottomTabSlice.reducer,
});
