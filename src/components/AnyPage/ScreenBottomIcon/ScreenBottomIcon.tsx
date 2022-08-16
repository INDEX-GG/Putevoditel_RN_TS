import React from "react";
import { View } from "react-native";
import { useScreenBottomIcon } from "./useScreenBottomIcon";
import { IScreenBottomIconProps } from "./types";

const ScreenBottomIcon = (props: IScreenBottomIconProps) => {
  const { color, Icon, focused, ActiveIcon } = props;
  const { activeIconContainerStyles, activeContainerStyles } =
    useScreenBottomIcon(props);

  const IconComponent = focused ? ActiveIcon : Icon;

  return (
    <View style={activeContainerStyles}>
      <View style={[activeIconContainerStyles]}>
        <IconComponent color={color} width={25} height={25} />
      </View>
    </View>
  );
};

export default React.memo(ScreenBottomIcon);
