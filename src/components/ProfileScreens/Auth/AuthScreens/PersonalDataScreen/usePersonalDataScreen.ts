import { Dispatch, SetStateAction, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
} from "react-native";
import { onlyNumberRegExt } from "../../../../../lib/services/regExp";
import { TextInputKeyDownFunction } from "../../../../../types/types";

export const usePersonalDataScreen = () => {
  const [lastname, setLastname] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [patronymic, setPatronymic] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");

  const handleChangeStringState = (
    setState: Dispatch<SetStateAction<string>>,
  ) => {
    return (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setState(e.nativeEvent.text);
    };
  };

  const handleChangeBirthday = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = e.nativeEvent.text;
    const onlyNumberValue = value.match(onlyNumberRegExt);
    if ((onlyNumberValue || !value) && value.length < 11) {
      setBirthday((prevState) => {
        if (value.length === 2 && prevState.length == 1) {
          return value + ".";
        }
        if (value.length === 5 && prevState.length == 4) {
          return value + ".";
        }
        if (value[value.length - 1] === ".") {
          return value.substring(0, value.length - 1);
        }
        return value;
      });
    }
  };

  return {
    birthday,
    lastname,
    firstname,
    patronymic,
    setFirstname,
    setLastname,
    setPatronymic,
    handleChangeBirthday,
    handleChangeStringState,
  };
};
