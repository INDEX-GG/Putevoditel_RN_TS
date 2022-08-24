import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServiceItemModel } from "../../../lib/models/IServiceItemModel";
import { RootState } from "../../index";
import { ReducersTypes } from "../../../types/store/types";

interface IInitialState {
  searchData: IServiceItemModel[];
}

const initialState: IInitialState = {
  searchData: [],
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    handleChangeSearchDataSlice(
      state,
      action: PayloadAction<IServiceItemModel[]>,
    ) {
      state.searchData = action.payload;
    },
  },
});

const selectSearchSlice = (state: RootState) =>
  state[ReducersTypes.SEARCH_SLICE];
export const selectSearch = (state: RootState) => selectSearchSlice(state);

export const { handleChangeSearchDataSlice } = searchSlice.actions;
export default searchSlice;
