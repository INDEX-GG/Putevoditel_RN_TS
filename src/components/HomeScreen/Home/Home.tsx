import React from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../screens/types";
import Icon from "../../../assets/icon/TestIcon.svg";
import { Button } from "react-native-paper";
import MontserratTextSC from "../../../UI/MontserratText/MontserratText";
import RalewayTextSC from "../../../UI/RalewayTextSC/RalewayTextSC";

type Props = NativeStackScreenProps<HomeStackParams, "Home">;

const Home = ({ navigation, route }: Props) => {
  const pushTo = () => {
    navigation.navigate("InnerHome");
  };

  return (
    <View>
      <Text>{route.params.title} - Default Text</Text>
      <MontserratTextSC fontWeight={500}>MontserratText</MontserratTextSC>
      <RalewayTextSC>RalewayTextSC</RalewayTextSC>
      <Icon width={"50"} height="50" />
      <Button onPress={pushTo}>Papper button</Button>
    </View>
  );
};

export default Home;
