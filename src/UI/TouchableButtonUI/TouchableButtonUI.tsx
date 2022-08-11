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
}

const TouchableButtonUI = ({
  text,
  Icon,
  ...touchableOpacityProps
}: ITouchableButtonUIProps) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.5}
      {...touchableOpacityProps}>
      <ButtonTextSC fontWeight={600}>{text}</ButtonTextSC>
      {Icon ? (
        <View style={styles.iconContainer}>
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
  },
  iconContainer: {
    marginLeft: 8,
  },
});

export default React.memo(TouchableButtonUI);
