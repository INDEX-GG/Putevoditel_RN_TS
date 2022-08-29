import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import RalewayTextSC from "../../../../UI/RalewayTextSC/RalewayTextSC";
import ArrowLeft from "../../../../assets/icon/ArrowLeft.svg";
import { WHITE_COLOR } from "../../../../lib/constants/constantsColors";
import { useOrientationStore } from "../../../../hooks/useOrientationStore";

interface IAuthHeaderProps {
  title: string;
  handlePressBack: () => void;
}

const AuthHeader = ({ title, handlePressBack }: IAuthHeaderProps) => {
  const { SCREEN_WIDTH } = useOrientationStore();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonLeft} onPress={handlePressBack}>
        <ArrowLeft />
      </TouchableOpacity>
      <RalewayTextSC
        style={{
          ...styles.text,
          maxWidth: SCREEN_WIDTH - 126,
        }}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </RalewayTextSC>
      <View style={styles.hiddenBlock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: WHITE_COLOR,
  },
  text: {
    width: "100%",
    textAlign: "center",
  },
  buttonLeft: {
    width: 63,
    height: 44,
    paddingVertical: 12,
    paddingLeft: 33,
    paddingRight: 20,
  },
  hiddenBlock: {
    width: 63,
    height: 44,
  },
});

export default React.memo(AuthHeader);
