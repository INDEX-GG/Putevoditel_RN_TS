import RNBlobUtil from "react-native-blob-util";
import { useUserStore } from "./useUserStore";
import { BASE_URL } from "../lib/constants/constants";
import { useModalStore } from "./useModalStore";
import { getNormalGender, onlyNumberString } from "../lib/services/services";

export const useDownloadFile = () => {
  const { user } = useUserStore();
  const { handleOpenModal } = useModalStore();
  const handleDownloadFile = async (
    fileName = "file",
    url: string,
    isOpen: boolean,
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

    try {
      config(options)
        .fetch("POST", `${BASE_URL}/api/v1/files/q?name=Родион`, undefined, {
          name: "Родион",
        })
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
          console.log(e);
          handleOpenModal(true, "failDownload");
        });
    } catch (e) {
      handleOpenModal(true, "failDownload");
    }
  };

  // 'name': name,
  //   'surname': surname,
  //   'patronymic': patronymic,
  //   'phone': phone,
  //   'passport': passport,
  //   'seria': seria,
  //   'nomer': nomer,
  //   'address': address,
  //   'familyComposition': familyComposition,
  //   'birthday': birthday,
  //   'gender': gender

  const handleDownloadDocx = (url: string, fileName: string) => {
    return () => {
      console.log(user);
      const seria = user.passport.slice(0, 4).replace(/\s/g, "");
      const nomer = user.passport.slice(4).replace(/\s/g, "");

      const paramsObj = {
        name: user.name,
        surname: user.surname,
        patronymic: user.patronymic,
        phone: onlyNumberString(user.phone),
        passport: user.passport.replace(" ", "%20"),
        seria: seria ? seria : "",
        nomer: nomer ? nomer : "",
        // address: user.address,
        familyComposition: user.familyComposition,
        birthday: user.birthday,
        gender: getNormalGender(user.gender),
      };
      const queryUrl = `${url}?${new URLSearchParams(paramsObj).toString()}`;
      console.log(queryUrl);
      handleDownloadFile(fileName, queryUrl, true);
    };
  };

  const handleDownloadDocxEmpty = (
    url: string,
    fileName: string,
    isDownloadOpen: boolean,
  ) => {
    return () => {
      handleDownloadFile("test", url, isDownloadOpen);
    };
  };

  return {
    handleDownloadDocx,
    handleDownloadDocxEmpty,
    handleDownloadFile,
  };
};
