import React from "react";
import { Animated, View } from "react-native";
import { useScreenBottomIcon } from "./useScreenBottomIcon";
import { IScreenBottomIconProps } from "./types";

const ScreenBottomIcon = (props: IScreenBottomIconProps) => {
  const { color, Icon, focused, ActiveIcon } = props;
  const { fadeAnim, activeContainerStyles, activeIconContainerStyles } =
    useScreenBottomIcon(props);

  const IconComponent = focused ? ActiveIcon : Icon;

  return (
    <Animated.View style={[activeContainerStyles, { opacity: fadeAnim }]}>
      <View style={[activeIconContainerStyles]}>
        <IconComponent color={color} width={25} height={25} />
      </View>
    </Animated.View>
  );
};

export default React.memo(ScreenBottomIcon);
