import React from "react";
import { View, StyleSheet } from "react-native";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import { BLACK_COLOR } from "../../../lib/constants/constantsColors";
import { useModalStore } from "../../../hooks/useModalStore";
import { useUserStore } from "../../../hooks/useUserStore";

const ModalLogout = () => {
  const { handleOpenModal } = useModalStore();
  const { handleLogoutUser } = useUserStore();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <MontserratTextSC fontWeight={500} style={styles.text}>
          Вы уверены что хотите выйти из аккаунта?
        </MontserratTextSC>
        <TouchableButtonUI
          text="Да"
          style={styles.button}
          onPress={handleLogoutUser}
        />
        <TouchableButtonUI
          text="Нет"
          style={{ ...styles.button, marginBottom: 0 }}
          onPress={() => handleOpenModal(false, null)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingBottom: 32,
    paddingHorizontal: 43,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    maxWidth: 250,
    color: BLACK_COLOR,
  },
  text: {
    textAlign: "center",
    marginBottom: 42,
  },
  button: {
    marginBottom: 18,
  },
});

export default React.memo(ModalLogout);
