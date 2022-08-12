import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { ReducersTypes } from "../../../types/store/types";
import { ModalContentType } from "../../../types/types";

interface IInitialState {
  isOpen: boolean;
  callback: (() => void) | null;
  modalContentType: ModalContentType | null;
}

const initialState: IInitialState = {
  isOpen: false,
  callback: null,
  modalContentType: null,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    handleOpenStoreModal(state, action: PayloadAction<IInitialState>) {
      state.isOpen = action.payload.isOpen;
      state.callback = action.payload.callback;
      state.modalContentType = action.payload.modalContentType;
    },
  },
});

const selectModalSlice = (state: RootState) => state[ReducersTypes.MODAL_SLICE];
export const selectModal = (state: RootState) => selectModalSlice(state);
export const { handleOpenStoreModal } = modalSlice.actions;

export default modalSlice;
