import React from "react";
import { View } from "react-native";
import { SVGComponentTypes } from "../../../types/types";

interface IScreenBottomIconProps {
  focused: boolean;
  color: string;
  size: number;
  Icon: SVGComponentTypes;
}

const ScreenBottomIcon = ({ color, Icon }: IScreenBottomIconProps) => {
  return (
    <View>
      <Icon color={color} />
    </View>
  );
};

export default React.memo(ScreenBottomIcon);
