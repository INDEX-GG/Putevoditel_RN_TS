import RNBlobUtil from "react-native-blob-util";
import { useUserStore } from "./useUserStore";
import { BASE_URL } from "../lib/constants/constants";
import { useModalStore } from "./useModalStore";
import {
  getBirthdayBackendData,
  getNormalGender,
  onlyNumberString,
} from "../lib/services/services";
import { IUserModel } from "../lib/models/IUserModel";
import axios from "axios";

interface IDataAutoFill
  extends Pick<
    IUserModel,
    | "name"
    | "surname"
    | "passport"
    | "patronymic"
    | "phone"
    | "address"
    | "familyComposition"
    | "birthday"
  > {
  gender: string;
}

export const useDownloadFile = () => {
  const { user } = useUserStore();
  const { handleOpenModal } = useModalStore();
  const handleDownloadFile = async (
    url: string,
    method: "POST" | "GET",
    fileName = "file",
    isOpen: boolean,
    data?: IDataAutoFill,
  ) => {
    handleOpenModal(true, "loading");
    const { config, fs, android } = RNBlobUtil;
    const directory = fs.dirs.DownloadDir;
    const options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: `${directory}/${fileName}.docx`,
        description: `Файл скачан из приложения "Услугив кормане"`,
      },
    };

    console.log(method, 321);

    axios.post(`${BASE_URL}/api/v1/files/${url}`, data).then((r) => {
      console.log(r);
    });
    return;

    try {
      config(options)
        .fetch(
          method,
          `${BASE_URL}/api/v1/files/${url}`,
          {
            "Content-Type": "application/octet-stream",
          },
          JSON.stringify(data),
        )
        .then((res) => {
          console.log(res);
          if (isOpen) {
            android.actionViewIntent(
              res.path(),
              `${directory}/${fileName}.docx`,
            );
          }
          handleOpenModal(true, "successDownload");
        })
        .catch((e) => {
          handleOpenModal(true, "failDownload");
          throw new Error(e);
        });
    } catch (e) {
      handleOpenModal(true, "failDownload");
    }
  };

  const handleDownloadDocx = (url: string, fileName: string) => {
    return () => {
      const data: IDataAutoFill = {
        name: user.name || "",
        surname: user.surname || "",
        patronymic: user.patronymic || "",
        phone: onlyNumberString(user.phone) || "",
        passport: user.passport.replace(" ", "%20") || "",
        address: user.address || "",
        familyComposition: user.familyComposition || "",
        birthday: getBirthdayBackendData(user.birthday) || "",
        gender: getNormalGender(user.gender) || "",
      };
      handleDownloadFile(url, "POST", fileName, true, data);
    };
  };

  const handleDownloadDocxEmpty = (
    url: string,
    fileName: string,
    isDownloadOpen: boolean,
  ) => {
    return () => {
      handleDownloadFile(fileName, "GET", url, isDownloadOpen);
    };
  };

  return {
    handleDownloadDocx,
    handleDownloadDocxEmpty,
    handleDownloadFile,
  };
};
