import React from "react";
import { View } from "react-native";
import { useScreenBottomIcon } from "./useScreenBottomIcon";
import { IScreenBottomIconProps } from "./types";
import { useOrientationStore } from "../../../hooks/useOrientationStore";

const ScreenBottomIcon = (props: IScreenBottomIconProps) => {
  const { color, Icon, focused, ActiveIcon } = props;
  const { activeIconContainerStyles, activeContainerStyles } =
    useScreenBottomIcon(props);
  const { isHorizontal } = useOrientationStore();

  const IconComponent = focused ? ActiveIcon : Icon;

  return (
    <View style={activeContainerStyles}>
      <View style={activeIconContainerStyles}>
        <IconComponent
          color={color}
          width={isHorizontal ? 20 : 25}
          height={isHorizontal ? 20 : 25}
        />
      </View>
    </View>
  );
};

export default React.memo(ScreenBottomIcon);
