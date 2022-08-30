import React from "react";
import { StyleSheet, View } from "react-native";
import SuccessDownload from "../../../assets/icon/Success.svg";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import { BLACK_COLOR } from "../../../lib/constants/constantsColors";
import { useModalStore } from "../../../hooks/useModalStore";

const ModalSuccessDownload = () => {
  const { handleOpenModal } = useModalStore();
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <SuccessDownload />
      </View>
      <MontserratTextSC fontWeight={500} style={styles.text}>
        Файл успешно скачан!
      </MontserratTextSC>
      <TouchableButtonUI
        onPress={() => handleOpenModal(false, null)}
        text="Хорошо"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 41,
    paddingBottom: 33,
    paddingHorizontal: 43,
    alignItems: "center",
  },
  containerIcon: {
    marginBottom: 32,
  },
  text: {
    color: BLACK_COLOR,
    marginBottom: 25,
  },
  button: {
    width: "100%",
  },
});

export default React.memo(ModalSuccessDownload);
