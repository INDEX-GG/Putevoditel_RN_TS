import React from "react";
import { View, StyleSheet } from "react-native";
import SpinnerUI from "../../../UI/SpinnerUI/SpinnerUI";

const ModalLoading = () => {
  return (
    <View style={styles.container}>
      <SpinnerUI />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 138,
  },
});

export default React.memo(ModalLoading);
