import { useAppSelector } from "./useAppSelector";
import {
  changeLayout,
  selectOrientation,
} from "../store/reducers/orientationSlice/orientationSlice";
import { useAppDispatch } from "./useAppDispatch";
import { WHITE_COLOR } from "../lib/constants/constantsColors";
import { useEffect } from "react";

export const useLayout = ({ newHeight = 0, newBackground = WHITE_COLOR }) => {
  const { layoutHeight, height, layoutBackground } =
    useAppSelector(selectOrientation);
  const dispatch = useAppDispatch();

  const handleChangeLayout = (height: number, background: string) => {
    dispatch(
      changeLayout({ layoutBackground: background, layoutHeight: height }),
    );
  };

  useEffect(() => {
    handleChangeLayout(newHeight, newBackground);
  }, []);

  return {
    height,
    layoutHeight,
    layoutBackground,
    handleChangeLayout,
  };
};
