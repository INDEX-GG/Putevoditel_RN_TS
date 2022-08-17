import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeysType } from "../types/types";

export const useAsyncStorage = () => {
  const handleSetAsyncStorage = (key: AsyncStorageKeysType, data: never) => {
    return AsyncStorage.setItem(`@${key}`, JSON.stringify(data));
  };
  const handleGetAsyncStorage = (key: AsyncStorageKeysType) => {
    return AsyncStorage.getItem(key);
  };
  const handleDeleteAsyncStorage = (key: AsyncStorageKeysType) => {
    return AsyncStorage.removeItem(key);
  };

  return {
    handleSetAsyncStorage,
    handleGetAsyncStorage,
    handleDeleteAsyncStorage,
  };
};
