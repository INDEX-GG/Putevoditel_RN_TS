import RNFetchBlob from "rn-fetch-blob";

export const useDownloadFile = () => {
  const handleDownloadFile = (fileName = "file") => {
    const { config, fs } = RNFetchBlob;
    const directory = fs.dirs.DownloadDir;
    console.log(fs.dirs.DocumentDir);
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
        // console.log(res);
      });
  };

  return {
    handleDownloadFile,
    RNFetchBlob,
  };
};
