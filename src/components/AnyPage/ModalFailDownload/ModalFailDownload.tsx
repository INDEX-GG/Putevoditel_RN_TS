import React from "react";
import { View, StyleSheet } from "react-native";
import { useModalStore } from "../../../hooks/useModalStore";
import FailDownload from "../../../assets/icon/Fail.svg";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import { BLACK_COLOR } from "../../../lib/constants/constantsColors";

const ModalFailDownload = () => {
  const { handleOpenModal } = useModalStore();
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <FailDownload />
      </View>
      <MontserratTextSC fontWeight={500} style={styles.text}>
        Что-то пошло не так...
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
    marginBottom: 31,
  },
  text: {
    color: BLACK_COLOR,
    marginBottom: 25,
  },
  button: {
    width: "100%",
  },
});

export default React.memo(ModalFailDownload);
