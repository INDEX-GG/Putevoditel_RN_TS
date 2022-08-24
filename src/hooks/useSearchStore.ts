import { useAppSelector } from "./useAppSelector";
import {
  handleChangeSearchDataSlice,
  selectSearch,
} from "../store/reducers/searchSlice/searchSlice";
import { useAppDispatch } from "./useAppDispatch";
import { IServiceItemModel } from "../lib/models/IServiceItemModel";

export const useSearchStore = () => {
  const { searchData } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  const handleChangeSearchData = (data: IServiceItemModel[]) => {
    dispatch(handleChangeSearchDataSlice(data));
  };

  return {
    searchData,
    handleChangeSearchData,
  };
};
