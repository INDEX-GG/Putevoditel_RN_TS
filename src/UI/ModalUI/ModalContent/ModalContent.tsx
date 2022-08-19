import React from "react";
import { ModalContentType } from "../../../types/types";
import EmailCodeInfoScreen from "../../../components/ProfileScreens/Auth/AuthScreens/EmailCodeInfoModal/EmailCodeInfoModal";
import ModalLoading from "../../../components/AnyPage/ModalLoading/ModalLoading";
import ModalLogout from "../../../components/AnyPage/ModalLogout/ModalLogout";
interface IModalContentProps {
  modalContent: ModalContentType;
  callback: (() => void) | null;
}

const ModalContent = ({ modalContent, callback }: IModalContentProps) => {
  const handleCallback = () => {
    if (callback) callback();
  };

  switch (modalContent) {
    case "email":
      return <EmailCodeInfoScreen handlePressGood={handleCallback} />;
    case "loading":
      return <ModalLoading />;
    case "logout":
      return <ModalLogout />;
    default:
      return null;
  }
};

export default React.memo(ModalContent);
