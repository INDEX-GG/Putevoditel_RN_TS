import React from "react";
import { Animated, Easing } from "react-native";
import SpinnerIcon from "../../assets/icon/Spiner.svg";

const SpinnerUI = () => {
  const spinValue = new Animated.Value(0);

  Animated.timing(spinValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  }).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <SpinnerIcon />
    </Animated.View>
  );
};

export default React.memo(SpinnerUI);
