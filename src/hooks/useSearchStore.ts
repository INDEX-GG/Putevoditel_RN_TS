import { useAppSelector } from "./useAppSelector";
import {
  handleChangeSearchDataSlice,
  ISearchData,
  selectSearch,
} from "../store/reducers/searchSlice/searchSlice";
import { useAppDispatch } from "./useAppDispatch";

export const useSearchStore = () => {
  const { searchData } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();

  const handleChangeSearchData = (data: ISearchData[]) => {
    dispatch(handleChangeSearchDataSlice(data));
  };

  return {
    searchData,
    handleChangeSearchData,
  };
};
