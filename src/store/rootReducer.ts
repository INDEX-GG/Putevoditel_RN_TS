import { combineReducers } from "redux";
import { ReducersTypes } from "../types/store/types";
import authSlice from "./reducers/authSlice/authSlice";
import modalSlice from "./reducers/modalSlice/modalSlice";

export const rootReducer = combineReducers({
  [ReducersTypes.AUTH_SLICE]: authSlice.reducer,
  [ReducersTypes.MODAL_SLICE]: modalSlice.reducer,
});
