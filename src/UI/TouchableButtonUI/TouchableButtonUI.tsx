import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  View,
} from "react-native";
import styled from "styled-components/native";
import { SVGComponentTypes } from "../../types/types";
import MontserratTextSC from "../MontserratTextSC/MontserratTextSC";
import { LIGHT_ORANGE_COLOR } from "../../lib/constants/constantsColors";

interface ITouchableButtonUIProps extends Partial<TouchableOpacityProps> {
  text: string;
  Icon?: SVGComponentTypes;
  iconPosition?: "start" | "end";
}

const TouchableButtonUI = ({
  text,
  Icon,
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
      <ButtonTextSC fontWeight={600}>{text}</ButtonTextSC>
      {Icon ? (
        <View style={[styles.iconContainer, reverseContainer]}>
          <Icon />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const ButtonTextSC = styled(MontserratTextSC)``;

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
