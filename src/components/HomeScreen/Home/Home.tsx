import React from "react";
import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../screens/types";

type Props = NativeStackScreenProps<HomeStackParams, "Home">;

const Home = ({ navigation, route }: Props) => {
  const pushTo = () => {
    navigation.navigate("InnerHome");
  };

  return (
    <View>
      <Text>{route.params.title}</Text>
      <Button title={"push top inner home"} onPress={pushTo} />
    </View>
  );
};

export default Home;
