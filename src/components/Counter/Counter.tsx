import React from "react";
import { Button, Text, View } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  decrement,
  increment,
  selectCounter,
} from "../../store/reducers/counterSlice/counterSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const Counter = () => {
  const { counter } = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>23</Text>
      <Text>23</Text>
      <Text>23</Text>
      <Text>{counter}</Text>
      <Button title={"+1"} onPress={() => dispatch(increment(1))} />
      <Button title={"-1"} onPress={() => dispatch(decrement(1))} />
    </View>
  );
};

export default Counter;
