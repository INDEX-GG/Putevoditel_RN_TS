import { IScreenBottomIconProps } from "./types";
import { useScreenBottomIconStyles } from "./styles";

export const useScreenBottomIcon = ({ focused }: IScreenBottomIconProps) => {
  const activeContainerStyles = focused ? styles.activeContainer : {};
  const activeIconContainerStyles = focused ? styles.activeIconContainer : {};

  return {
    activeContainerStyles,
    activeIconContainerStyles,
  };
};

const styles = useScreenBottomIconStyles();
