import RNBlobUtil from "react-native-blob-util";

export const useDownloadFile = () => {
  const handleDownloadFile = (fileName = "file") => {
    console.log(RNBlobUtil, 1);
    // const { config, fs } = RNFetchBlob;
    // const directory = fs.dirs.DownloadDir;
    // console.log(fs.dirs.DocumentDir, Platform.OS, RNFS);
    // const options = {
    //   fileCache: true,
    //   addAndroidDownloads: {
    //     useDownloadManager: true,
    //     notification: true,
    //     path: `${directory}/${fileName}.docx`,
    //     description: `Файл скачан из приложения "Услугив кормане"`,
    //   },
    // };
    //
    // config(options)
    //   .fetch("GET", "https://docxtemplater.com/docs/simple.docx")
    //   .then((res) => {
    //     // console.log(res);
    //   });
  };

  return {
    handleDownloadFile,
  };
};
