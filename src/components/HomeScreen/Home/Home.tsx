import React from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../screens/types";
import Icon from "../../../assets/icon/TestIcon.svg";
import { Button } from "react-native-paper";

type Props = NativeStackScreenProps<HomeStackParams, "Home">;

const Home = ({ navigation, route }: Props) => {
  const pushTo = () => {
    navigation.navigate("InnerHome");
  };

  return (
    <View>
      <Text>{route.params.title}</Text>
      <Icon width={"50"} height="50" />
      <Button onPress={pushTo}>Papper button</Button>
    </View>
  );
};

export default Home;
