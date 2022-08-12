import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";

const AuthDescription = () => {
  return (
    <View>
      <MontserratTextSC fontWeight={400} style={styles.text}>
        Регистрируясь в приложении вы{"\n"} соглашаетесь с{" "}
        <MontserratTextSC
          fontWeight={400}
          style={styles.textSpan}
          onPress={() => console.log(123)}>
          политикой конфиденциальности
        </MontserratTextSC>
      </MontserratTextSC>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "400",
    textAlign: "center",
    maxWidth: 350,
  },
  textSpan: {
    color: "#BE3F24",
    fontWeight: "400",
    textAlign: "center",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textDecorationColor: "#BE3F24",
  },
});

export default React.memo(AuthDescription);
