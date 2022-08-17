import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
} from "react-native";
import { StateValueType } from "../../../components/ProfileScreens/Auth/types";

export const useInputCodeUI = (
  handleSetFinalCode: Dispatch<SetStateAction<StateValueType>>,
  error: string,
) => {
  const [inputValueOne, setInputValueOne] = useState<string>("");
  const [inputValueTwo, setInputValueTwo] = useState<string>("");
  const [inputValueThree, setInputValueThree] = useState<string>("");
  const [inputValueFour, setInputValueFour] = useState<string>("");
  const [inputValueFive, setInputValueFive] = useState<string>("");
  const [inputValueSix, setInputValueSix] = useState<string>("");

  const refInputOne = useRef<TextInput>(null);
  const refInputTwo = useRef<TextInput>(null);
  const refInputThree = useRef<TextInput>(null);
  const refInputFour = useRef<TextInput>(null);
  const refInputFive = useRef<TextInput>(null);
  const refInputSix = useRef<TextInput>(null);

  const inputCode = useMemo(
    () =>
      `${inputValueOne}${inputValueTwo}${inputValueThree}${inputValueFour}${inputValueFive}${inputValueSix}`,
    [
      inputValueOne,
      inputValueTwo,
      inputValueThree,
      inputValueFour,
      inputValueFive,
      inputValueSix,
    ],
  );

  useEffect(() => {
    if (refInputOne.current) {
      refInputOne.current.focus();
    }
  }, []);

  useEffect(() => {
    handleSetFinalCode((prevState) => ({
      ...prevState,
      value: inputCode,
    }));
  }, [inputCode]);

  useEffect(() => {
    if (error) {
      setInputValueOne("");
      setInputValueTwo("");
      setInputValueThree("");
      setInputValueFour("");
      setInputValueFive("");
      setInputValueSix("");
      refInputOne.current?.focus();
      handleSetFinalCode((prevState) => ({
        ...prevState,
        value: inputCode,
      }));
    }
  }, [error]);

  const handleChangeInput = (
    setState: Dispatch<SetStateAction<string>>,
    nextRef?: RefObject<TextInput> | null,
    prevRef?: RefObject<TextInput> | null,
  ) => {
    return (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const value = e.nativeEvent.text;
      if (!isNaN(+value)) {
        setState(value);
        if (nextRef && value) {
          nextRef.current?.focus();
          return;
        }
        if (prevRef && !value) {
          prevRef.current?.focus();
        }
      }
    };
  };

  const handleKeyPress = (
    setState: Dispatch<SetStateAction<string>>,
    nextRef?: RefObject<TextInput> | null,
    prevRef?: RefObject<TextInput> | null,
  ) => {
    return (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
      switch (e.nativeEvent.key) {
        case "Backspace":
          setState((prevState) => {
            if (!prevState && prevRef) {
              prevRef.current?.focus();
            }
            return "";
          });
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          setState((prevState) => {
            if (prevState) {
              if (nextRef) nextRef.current?.focus();
              return e.nativeEvent.key;
            }
            return prevState;
          });
      }
    };
  };

  return {
    inputCode,
    refInputOne,
    refInputTwo,
    refInputThree,
    refInputFour,
    refInputFive,
    refInputSix,
    inputValueOne,
    inputValueTwo,
    inputValueThree,
    inputValueFour,
    inputValueFive,
    inputValueSix,
    setInputValueOne,
    setInputValueTwo,
    setInputValueThree,
    setInputValueFour,
    setInputValueFive,
    setInputValueSix,
    handleChangeInput,
    handleKeyPress,
  };
};
