import RNBlobUtil from "react-native-blob-util";
import { useUserStore } from "./useUserStore";
import { BASE_URL } from "../lib/constants/constants";
import { useModalStore } from "./useModalStore";
import {
  getBirthdayBackendData,
  onlyNumberString,
} from "../lib/services/services";
import { IUserModel } from "../lib/models/IUserModel";
import { PermissionsAndroid, Platform } from "react-native";
import RNFS from "react-native-fs";

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

const getPermission = async () => {
  if (Platform.OS === "android") {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
};

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
    const isGradle = await getPermission();
    const { config, fs, android } = RNBlobUtil;
    const directory = fs.dirs.DownloadDir;
    const path = `${RNFS.DocumentDirectoryPath}/PutevoditelApp/${fileName}.docx`;

    if (isGradle) {
      const options = {
        fileCache: true,
        path: path,
      };
      try {
        config(options)
          .fetch(
            method,
            `${BASE_URL}/api/v1/files/${url}`,
            {},
            JSON.stringify(data || {}),
          )
          .then((res) => {
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
    } else {
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
        birthday: getBirthdayBackendData(user.birthday) || "3000-01-01",
        gender: user.gender || "None",
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
