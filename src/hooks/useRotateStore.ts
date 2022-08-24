import { selectRotate } from "../store/reducers/rotateSlice/rotateSlice";
import { useAppSelector } from "./useAppSelector";

export const useRotateStore = () => {
  const { width, height, rotate } = useAppSelector(selectRotate);
  return {
    width,
    height,
    rotate,
  };
};
