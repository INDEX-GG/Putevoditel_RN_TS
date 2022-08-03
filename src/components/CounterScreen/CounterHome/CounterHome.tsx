import React from "react";
import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CountersStackParams } from "../../../screens/types";

type Props = NativeStackScreenProps<CountersStackParams, "Counters">;

const CounterHome = ({ navigation }: Props) => {
  const pushTo = () => {
    navigation.navigate("Counter", { title: "test" });
  };

  return (
    <View>
      <Text>CounterScreen</Text>
      <Button title={"push counter"} onPress={pushTo} />
    </View>
  );
};

export default CounterHome;
