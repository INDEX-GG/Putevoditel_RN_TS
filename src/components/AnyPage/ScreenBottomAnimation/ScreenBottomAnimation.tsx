import React, { useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { MAIN_COLOR } from "../../../lib/constants/constantsColors";

const ScreenBottomAnimation = () => {
  return <Animated.View style={styled.bottomStyles} />;
};

const ActiveItemSize = 54;

const styled = StyleSheet.create({
  bottomStyles: {
    width: ActiveItemSize,
    height: ActiveItemSize,
    borderRadius: ActiveItemSize / 2,
    backgroundColor: MAIN_COLOR,
    position: "absolute",
    zIndex: 1,
    left: 50,
    bottom: 45,
  },
});

export default React.memo(ScreenBottomAnimation);
