import React from "react";
import { View, StyleSheet } from "react-native";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParams } from "../../../../screens/types";

const AuthDescription = () => {
  const navigation = useNavigation<NavigationProp<ProfileStackParams>>();

  const handlePushPolicy = () => {
    navigation.navigate("Policy");
  };

  return (
    <View>
      <MontserratTextSC fontWeight={400} style={styles.text}>
        Регистрируясь в приложении вы{"\n"} соглашаетесь с{" "}
        <MontserratTextSC
          fontWeight={400}
          style={styles.textSpan}
          onPress={handlePushPolicy}>
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
