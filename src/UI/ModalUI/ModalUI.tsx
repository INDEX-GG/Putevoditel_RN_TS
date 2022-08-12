import React from "react";
import { View, StyleSheet } from "react-native";
import { WHITE_COLOR } from "../../lib/constants/constantsColors";
import { useModalStore } from "../../hooks/useModalStore";
import ModalContent from "./ModalContent/ModalContent";

const ModalUI = () => {
  const { isOpen, callback, modalContentType } = useModalStore();
  return isOpen ? (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ModalContent modalContent={modalContentType} callback={callback} />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: "rgba(152, 91, 0, 0.15)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    backgroundColor: WHITE_COLOR,
    width: "100%",
    maxWidth: 320,
    borderRadius: 30,
    paddingTop: 43,
    paddingBottom: 21,
    paddingHorizontal: 33,
  },
});

export default React.memo(ModalUI);
