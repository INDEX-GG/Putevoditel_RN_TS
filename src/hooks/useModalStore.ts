import { useAppSelector } from "./useAppSelector";
import {
  handleOpenStoreModal,
  selectModal,
} from "../store/reducers/modalSlice/modalSlice";
import { useAppDispatch } from "./useAppDispatch";
import { ModalContentType } from "../types/types";

export const useModalStore = () => {
  const { isOpen, modalContentType, callback } = useAppSelector(selectModal);
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

  return {
    isOpen,
    callback,
    handleOpenModal,
    modalContentType,
  };
};
