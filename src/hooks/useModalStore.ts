import { useAppSelector } from "./useAppSelector";
import {
  handleChangeVisibleBottomTab,
  handleOpenStoreModal,
  selectModal,
} from "../store/reducers/modalSlice/modalSlice";
import { useAppDispatch } from "./useAppDispatch";
import { ModalContentType } from "../types/types";

export const useModalStore = () => {
  const { isOpen, modalContentType, isVisibleBottomTab, callback } =
    useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const handleOpenModal = (
    isOpen: boolean,
    contentName: ModalContentType,
    callback?: () => void,
  ) => {
    dispatch(
      handleOpenStoreModal({
        isOpen,
        modalContentType: contentName,
        callback: callback || null,
      }),
    );
  };

  const handleChangeBottomTabVisible = (state: boolean) => {
    dispatch(handleChangeVisibleBottomTab(state));
  };

  return {
    isOpen,
    callback,
    handleOpenModal,
    modalContentType,
    isVisibleBottomTab,
    handleChangeBottomTabVisible,
  };
};
