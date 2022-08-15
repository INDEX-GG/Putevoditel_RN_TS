import { Dispatch, SetStateAction, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { onlyNumberRegExp } from "../../../../../lib/services/regExp";
import { UserSexType } from "../../../../../types/types";

export const usePersonalDataScreen = () => {
  const [lastname, setLastname] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [patronymic, setPatronymic] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [passport, setPassport] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("+7");
  const [sex, setSex] = useState<UserSexType>(null);

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
    const onlyNumberValue = value.match(onlyNumberRegExp);
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

  const handleChangePassport = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = e.nativeEvent.text.replace(" ", "");
    if ((value.match(/^[0-9 ]+$/) || !value) && value.length < 11) {
      const passwordSeria = value.substring(0, 4).trim();
      const passwordNumber = value.substring(4).trim();
      const passwordSpace = passwordSeria.length >= 4 ? " " : "";
      setPassport(`${passwordSeria}${passwordSpace}${passwordNumber}`.trim());
    }
  };

  const handleChangeAddress = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = e.nativeEvent.text;
    if (value.length < 150) {
      setAddress(value);
    }
  };

  const handleChangePhone = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = e.nativeEvent.text;
    if (value.length >= 2) {
      setPhone(value);
    }
  };

  const handleChangeSex = (state: UserSexType) => {
    return () => {
      if (sex === state) {
        setSex(null);
        return;
      }
      setSex(state);
    };
  };

  return {
    sex,
    phone,
    setSex,
    address,
    passport,
    birthday,
    lastname,
    firstname,
    patronymic,
    setFirstname,
    setLastname,
    setPatronymic,
    handleChangeSex,
    handleChangePhone,
    handleChangeAddress,
    handleChangePassport,
    handleChangeBirthday,
    handleChangeStringState,
  };
};
