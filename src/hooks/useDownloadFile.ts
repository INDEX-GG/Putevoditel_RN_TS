import RNBlobUtil from "react-native-blob-util";
import RNFS from "react-native-fs";
import { PermissionsAndroid } from "react-native";

export const useDownloadFile = () => {
  const handleDownloadFile = async (fileName = "file") => {
    // const granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //   {
    //     title: "Усуги в кармане",
    //     message: "Доступ на скачивание файлов.",
    //     buttonNeutral: "Позже",
    //     buttonNegative: "Отказать",
    //     buttonPositive: "Подтвердить",
    //   },
    // );
    //
    // console.log(granted, PermissionsAndroid.RESULTS);
    //
    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //   RNFS.copyFileAssets(
    //     "/doc/tes.doc",
    //     `${RNFS.DownloadDirectoryPath}/tes.doc`,
    //   )
    //     .then((r) => {
    //       console.log("success download");
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
    // return;

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

    config(options)
      .fetch("GET", "https://docxtemplater.com/docs/simple.docx")
      .then((res) => {
        android.actionViewIntent(res.path(), `${directory}/${fileName}.docx`);
      });
  };

  return {
    handleDownloadFile,
  };
};
