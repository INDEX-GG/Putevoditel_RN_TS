import React, { useEffect } from "react";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";
import { guardianshipServicesData } from "../lib/mock/guardianshipServicesData";
import socialServicesData from "../lib/mock/socialServicesData";
import socialHelpData from "../lib/mock/socialHelpData";
import { useSearchStore } from "../hooks/useSearchStore";

const SearchInit = () => {
  const { handleChangeSearchData } = useSearchStore();

  const getChildrenItemArray = (
    array: IServiceItemModel[],
    handlePushArray: (array: IServiceItemModel) => void,
  ) => {
    for (let i = 0; i < array.length; i++) {
      handlePushArray(array[i]);
      const childrenArray = array[i].children;
      if (childrenArray) {
        getChildrenItemArray(childrenArray, handlePushArray);
      }
    }
  };

  const getFinallyArray = (array: IServiceItemModel[]) => {
    const allNestingArray: IServiceItemModel[] = [];

    const handlePushArray = (item: IServiceItemModel) =>
      allNestingArray.push(item);

    getChildrenItemArray(array, handlePushArray);
    return allNestingArray;
  };

  useEffect(() => {
    const guardianshipAllData = getFinallyArray(guardianshipServicesData);
    const socialServicesAllData = getFinallyArray(socialServicesData);
    const socialHelpAllData = getFinallyArray(socialHelpData);

    handleChangeSearchData([
      ...guardianshipAllData,
      ...socialHelpAllData,
      ...socialServicesAllData,
    ]);
  }, []);

  return null;
};

export default React.memo(SearchInit);
