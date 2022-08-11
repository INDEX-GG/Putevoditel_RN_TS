import { combineReducers } from "redux";
import { ReducersTypes } from "../types/store/types";
import authSlice from "./reducers/authSlice/authSlice";

export const rootReducer = combineReducers({
  [ReducersTypes.AUTH_SLICE]: authSlice.reducer,
});
