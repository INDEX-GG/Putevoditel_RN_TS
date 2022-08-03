import React from "react";
import { Button, Text, View } from "react-native";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  decrement,
  increment,
  selectCounter,
} from "../../../store/reducers/counterSlice/counterSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { RootStackParamsList } from "../../../screens/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type CounterProps = NativeStackScreenProps<RootStackParamsList, "HomeStack">;

const Counter = ({ navigation }: CounterProps) => {
  const { counter } = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  const pushBack = () => {
    navigation.goBack();
  };

  const pushHome = () => {
    navigation.navigate("HomeStack", {
      screen: "InnerHome",
    });
  };

  return (
    <View>
      <Text>{counter}</Text>
      <Button title={"+1"} onPress={() => dispatch(increment(1))} />
      <Button title={"-1"} onPress={() => dispatch(decrement(1))} />
      <Button title={"back to counters screen"} onPress={pushBack} />
      <Button title={"back to home"} onPress={pushHome} />
    </View>
  );
};

export default Counter;
