import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../../screens/types";

type Props = NativeStackScreenProps<RootStackParamsList, "CounterStack">;

const InnerHome = ({ navigation }: Props) => {
  const pushBack = () => navigation.goBack();
  const pushOtherStack = () =>
    navigation.navigate("CounterStack", {
      screen: "Counters",
    });

  return (
    <View>
      <Text>123</Text>
      <Button title="Back" onPress={pushBack} />
      <Button title="Other Stack" onPress={pushOtherStack} />
    </View>
  );
};

export default InnerHome;
