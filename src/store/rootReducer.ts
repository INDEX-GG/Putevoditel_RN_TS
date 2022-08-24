import { combineReducers } from "redux";
import { ReducersTypes } from "../types/store/types";
import authSlice from "./reducers/authSlice/authSlice";
import modalSlice from "./reducers/modalSlice/modalSlice";
import searchSlice from "./reducers/searchSlice/searchSlice";
import rotateSlice from "./reducers/rotateSlice/rotateSlice";

export const rootReducer = combineReducers({
  [ReducersTypes.AUTH_SLICE]: authSlice.reducer,
  [ReducersTypes.MODAL_SLICE]: modalSlice.reducer,
  [ReducersTypes.SEARCH_SLICE]: searchSlice.reducer,
  [ReducersTypes.ROTATE_SLICE]: rotateSlice.reducer,
});
