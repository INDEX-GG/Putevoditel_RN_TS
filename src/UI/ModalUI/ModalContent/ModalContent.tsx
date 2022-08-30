import React from "react";
import { ModalContentType } from "../../../types/types";
import EmailCodeInfoScreen from "../../../components/ProfileScreens/Auth/AuthScreens/EmailCodeInfoModal/EmailCodeInfoModal";
import ModalLoading from "../../../components/AnyPage/ModalLoading/ModalLoading";
import ModalLogout from "../../../components/AnyPage/ModalLogout/ModalLogout";
import ModalSuccessDownload from "../../../components/AnyPage/ModalSuccessDownload/ModalSuccessDownload";
import ModalFailDownload from "../../../components/AnyPage/ModalFailDownload/ModalFailDownload";
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
    case "successDownload":
      return <ModalSuccessDownload />;
    case "failDownload":
      return <ModalFailDownload />;
    default:
      return null;
  }
};

export default React.memo(ModalContent);
