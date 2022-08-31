import { useAppSelector } from "./useAppSelector";
import {
  changeOrientation,
  selectOrientation,
} from "../store/reducers/orientationSlice/orientationSlice";
import { useAppDispatch } from "./useAppDispatch";

export const useOrientationStore = () => {
  const { width, height, isHorizontal } = useAppSelector(selectOrientation);
  const dispatch = useAppDispatch();

  const handleChangeOrientation = (
    width: number,
    height: number,
    isHorizontal: boolean,
  ) => {
    dispatch(changeOrientation({ width, height, isHorizontal }));
  };

  return {
    isHorizontal,
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    handleChangeOrientation,
  };
};
