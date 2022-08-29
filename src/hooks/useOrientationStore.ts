import { useAppSelector } from "./useAppSelector";
import {
  changeOrientation,
  selectOrientation,
} from "../store/reducers/orientationSlice/orientationSlice";
import { useAppDispatch } from "./useAppDispatch";

export const useOrientationStore = () => {
  const { width, height } = useAppSelector(selectOrientation);
  const dispatch = useAppDispatch();

  const handleChangeOrientation = (width: number, height: number) => {
    dispatch(changeOrientation({ width, height }));
  };

  return {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    handleChangeOrientation,
  };
};
