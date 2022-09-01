import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  View,
  TextProps,
} from "react-native";
import { SVGComponentTypes } from "../../types/types";
import MontserratTextSC from "../MontserratTextSC/MontserratTextSC";
import { LIGHT_ORANGE_COLOR } from "../../lib/constants/constantsColors";

interface ITouchableButtonUIProps extends Partial<TouchableOpacityProps> {
  text: string;
  Icon?: SVGComponentTypes;
  iconPosition?: "start" | "end";
  styleText?: Pick<TextProps, "style">;
}

const TouchableButtonUI = ({
  text,
  Icon,
  styleText,
  iconPosition = "end",
  ...touchableOpacityProps
}: ITouchableButtonUIProps) => {
  const moreStyles = (
    touchableOpacityProps ? touchableOpacityProps.style : {}
  ) as object;

  const reverseStyle = iconPosition === "start" ? styles.reverse : {};
  const reverseContainer =
    iconPosition === "start" ? styles.reverseIconContainer : {};

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      {...touchableOpacityProps}
      style={{ ...styles.buttonContainer, ...reverseStyle, ...moreStyles }}>
      <MontserratTextSC fontWeight={600} style={styleText?.style}>
        {text}
      </MontserratTextSC>
      {Icon ? (
        <View style={[styles.iconContainer, reverseContainer]}>
          <Icon />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: LIGHT_ORANGE_COLOR,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    paddingHorizontal: 30,
    height: 50,
  },
  reverse: {
    flexDirection: "row-reverse",
  },
  iconContainer: {
    marginLeft: 8,
  },
  reverseIconContainer: {
    marginLeft: 0,
    marginRight: 6,
  },
});

export default React.memo(TouchableButtonUI);
