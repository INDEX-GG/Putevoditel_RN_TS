import React, { useEffect } from "react";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";
import { guardianshipServicesData } from "../lib/mock/guardianshipServicesData";
import socialServicesData from "../lib/mock/socialServicesData";
import socialHelpData from "../lib/mock/socialHelpData";
import { useSearchStore } from "../hooks/useSearchStore";
import { ISearchData } from "../store/reducers/searchSlice/searchSlice";

const SearchInit = () => {
  const { handleChangeSearchData } = useSearchStore();

  const getChildrenItemArray = (
    array: IServiceItemModel[],
    handlePushArray: (array: ISearchData) => void,
    prevTitle: string,
  ) => {
    for (let i = 0; i < array.length; i++) {
      const title = `${prevTitle ? `${prevTitle} / ` : ""}${array[i].title}`;
      handlePushArray({ ...array[i], searchTitle: title });
      const childrenArray = array[i].children;
      if (childrenArray) {
        getChildrenItemArray(childrenArray, handlePushArray, title);
      }
    }
  };

  const getFinallyArray = (array: IServiceItemModel[]) => {
    const allNestingArray: ISearchData[] = [];

    const handlePushArray = (item: ISearchData) => allNestingArray.push(item);

    getChildrenItemArray(array, handlePushArray, "");
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
