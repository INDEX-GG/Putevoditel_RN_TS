import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  handleChangeRotate,
  RotateType,
} from "../store/reducers/rotateSlice/rotateSlice";

const RotateInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    Dimensions.addEventListener("change", ({ window: { width, height } }) => {
      const rotate: RotateType = width > height ? "horizontal" : "vertical";
      dispatch(handleChangeRotate({ width, height, rotate }));
    });
  }, []);

  return null;
};

export default React.memo(RotateInit);
