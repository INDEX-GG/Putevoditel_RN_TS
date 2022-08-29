import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { useOrientationStore } from "../hooks/useOrientationStore";

const OrientationInit = () => {
  const { handleChangeOrientation } = useOrientationStore();
  useEffect(() => {
    Dimensions.addEventListener("change", ({ window }) => {
      handleChangeOrientation(
        Math.floor(window.width),
        Math.floor(window.height),
      );
    });
  }, []);

  return null;
};

export default React.memo(OrientationInit);
