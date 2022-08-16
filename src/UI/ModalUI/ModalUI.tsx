import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { WHITE_COLOR } from "../../lib/constants/constantsColors";
import { useModalStore } from "../../hooks/useModalStore";
import ModalContent from "./ModalContent/ModalContent";

const ModalUI = () => {
  const { isOpen, callback, modalContentType, handleOpenModal } =
    useModalStore();
  const handleCloseModal = () => {
    if (modalContentType !== "loading") {
      handleOpenModal(false, null);
      if (callback) callback();
    }
  };

  return isOpen ? (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ModalContent modalContent={modalContentType} callback={callback} />
      </View>
      <Pressable onPress={handleCloseModal} style={styles.backdor} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 1,
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
    zIndex: 1,
  },
  backdor: {
    backgroundColor: "rgba(152, 91, 0, 0.15)",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
});

export default React.memo(ModalUI);
