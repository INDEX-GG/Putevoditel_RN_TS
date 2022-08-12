import { StateValueType } from "./types";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Dispatch, SetStateAction } from "react";

export const useAuth = () => {
  const handleChangeInputValue = (
    setState: Dispatch<SetStateAction<StateValueType>>,
  ) => {
    return (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setState({
        value: e.nativeEvent?.text || "",
        error: "",
      });
    };
  };

  return {
    handleChangeInputValue,
  };
};
