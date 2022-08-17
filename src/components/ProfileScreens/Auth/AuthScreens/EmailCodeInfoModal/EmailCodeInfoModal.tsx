import React from "react";
import { View, StyleSheet } from "react-native";
import MontserratTextSC from "../../../../../UI/MontserratTextSC/MontserratTextSC";
import EmailIcon from "../../../../../assets/icon/EmailIcon.svg";
import { LIGHT_ORANGE_COLOR } from "../../../../../lib/constants/constantsColors";
import TouchableButtonUI from "../../../../../UI/TouchableButtonUI/TouchableButtonUI";

interface IEmailCodeInfoScreenProps {
  handlePressGood: () => void;
}

const EmailCodeInfoModal = ({ handlePressGood }: IEmailCodeInfoScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <EmailIcon width={83} height={64} color={LIGHT_ORANGE_COLOR} />
      </View>
      <MontserratTextSC fontWeight={500} style={styles.text}>
        Для подтверждения регистрации учётной записи введите код, который мы
        отправили на указанную электронную почту.
      </MontserratTextSC>
      <TouchableButtonUI
        style={styles.button}
        text="Хорошо"
        onPress={handlePressGood}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 43,
    paddingBottom: 21,
    paddingHorizontal: 33,
  },
  iconContainer: {
    marginBottom: 29,
  },
  text: {
    textAlign: "center",
    marginBottom: 17,
  },
  button: {
    minWidth: 234,
  },
});

export default React.memo(EmailCodeInfoModal);
