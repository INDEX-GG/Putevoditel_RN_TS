import { combineReducers } from "redux";
import { ReducersTypes } from "../types/store/types";
import authSlice from "./reducers/authSlice/authSlice";
import modalSlice from "./reducers/modalSlice/modalSlice";
import searchSlice from "./reducers/searchSlice/searchSlice";
import orientationSlice from "./reducers/orientationSlice/orientationSlice";

export const rootReducer = combineReducers({
  [ReducersTypes.AUTH_SLICE]: authSlice.reducer,
  [ReducersTypes.MODAL_SLICE]: modalSlice.reducer,
  [ReducersTypes.SEARCH_SLICE]: searchSlice.reducer,
  [ReducersTypes.ORIENTATION_SLICE]: orientationSlice.reducer,
});
