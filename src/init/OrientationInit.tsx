import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { useOrientationStore } from "../hooks/useOrientationStore";

const OrientationInit = () => {
  const { handleChangeOrientation } = useOrientationStore();
  useEffect(() => {
    Dimensions.addEventListener("change", ({ screen }) => {
      const { width, height } = screen;
      const isHorizontal = width > height;
      handleChangeOrientation(
        Math.floor(width),
        Math.floor(height),
        isHorizontal,
      );
    });
  }, []);

  return null;
};

export default React.memo(OrientationInit);
