import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { IScreenBottomIconProps } from "./types";
import { useScreenBottomIconStyles } from "./styles";

export const useScreenBottomIcon = ({ focused }: IScreenBottomIconProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (focused) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [focused]);

  const activeContainerStyles = focused ? styles.activeContainer : {};
  const activeIconContainerStyles = focused ? styles.activeIconContainer : {};

  return {
    fadeAnim,
    activeContainerStyles,
    activeIconContainerStyles,
  };
};

const styles = useScreenBottomIconStyles();
