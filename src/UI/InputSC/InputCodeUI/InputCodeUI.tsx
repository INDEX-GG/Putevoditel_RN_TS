import React, { Dispatch, SetStateAction } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useInputCodeUI } from "./useInputCodeUI";
import {
  BLACK_COLOR,
  SECONDARY_COLOR,
} from "../../../lib/constants/constantsColors";
import { StateValueType } from "../../../components/ProfileScreens/Auth/types";

interface IInputCodeUIProps {
  error: string;
  handleSetFinalCode: Dispatch<SetStateAction<StateValueType>>;
}

const InputCodeUI = ({ error, handleSetFinalCode }: IInputCodeUIProps) => {
  const {
    refInputOne,
    refInputTwo,
    refInputThree,
    refInputFour,
    refInputFive,
    refInputSix,
    handleKeyPress,
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
  } = useInputCodeUI(handleSetFinalCode, error);
  return (
    <View style={styles.inputsContainer}>
      <TextInput
        value={inputValueOne}
        onKeyPress={handleKeyPress(setInputValueOne, refInputTwo, null)}
        onChange={handleChangeInput(setInputValueOne, refInputTwo, null)}
        style={styles.input}
        ref={refInputOne}
        keyboardType={"numeric"}
        maxLength={1}
      />
      <TextInput
        value={inputValueTwo}
        onKeyPress={handleKeyPress(
          setInputValueTwo,
          refInputThree,
          refInputOne,
        )}
        onChange={handleChangeInput(
          setInputValueTwo,
          refInputThree,
          refInputOne,
        )}
        style={styles.input}
        ref={refInputTwo}
        keyboardType={"numeric"}
        maxLength={1}
      />
      <TextInput
        value={inputValueThree}
        onKeyPress={handleKeyPress(
          setInputValueThree,
          refInputFour,
          refInputTwo,
        )}
        onChange={handleChangeInput(
          setInputValueThree,
          refInputFour,
          refInputTwo,
        )}
        style={styles.input}
        ref={refInputThree}
        keyboardType={"numeric"}
        maxLength={1}
      />
      <TextInput
        value={inputValueFour}
        onKeyPress={handleKeyPress(
          setInputValueFour,
          refInputFive,
          refInputThree,
        )}
        onChange={handleChangeInput(
          setInputValueFour,
          refInputFive,
          refInputThree,
        )}
        style={styles.input}
        ref={refInputFour}
        keyboardType={"numeric"}
        maxLength={1}
      />
      <TextInput
        value={inputValueFive}
        onKeyPress={handleKeyPress(
          setInputValueFive,
          refInputSix,
          refInputFour,
        )}
        onChange={handleChangeInput(
          setInputValueFive,
          refInputSix,
          refInputFour,
        )}
        style={styles.input}
        ref={refInputFive}
        keyboardType={"numeric"}
        maxLength={1}
      />
      <TextInput
        value={inputValueSix}
        onKeyPress={handleKeyPress(setInputValueSix, null, refInputFive)}
        onChange={handleChangeInput(setInputValueSix, null, refInputFive)}
        style={{ ...styles.input, marginRight: 0 }}
        ref={refInputSix}
        keyboardType={"numeric"}
        maxLength={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: "row",
  },
  input: {
    width: 41,
    height: 41,
    borderRadius: 8,
    textAlign: "center",
    marginRight: 8,
    color: BLACK_COLOR,
    backgroundColor: SECONDARY_COLOR,
  },
});

export default React.memo(InputCodeUI);
