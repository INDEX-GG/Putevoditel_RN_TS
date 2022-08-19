import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { onlyNumberRegExp } from "../../../../../lib/services/regExp";
import { UserSexType } from "../../../../../types/types";
import {
  IPersonalDataBirthdayProps,
  IPersonalDataFamilyProps,
  IPersonalDataFioProps,
  IPersonalDataLocationProps,
  IPersonalDataPassportProps,
  IPersonalDataPhoneProps,
  IPersonalDataSexProps,
} from "./types";
import { IPersonalDataSendData } from "../types";
import { useUserStore } from "../../../../../hooks/useUserStore";
import { getNormalDate } from "../../../../../lib/services/services";

export const usePersonalDataScreen = (
  handleRegisterUser: IPersonalDataSendData,
  isEdit: boolean,
) => {
  const { user } = useUserStore();
  const [lastname, setLastname] = useState<string>(isEdit ? user.surname : "");
  const [firstname, setFirstname] = useState<string>(isEdit ? user.name : "");
  const [patronymic, setPatronymic] = useState<string>(
    isEdit ? user.patronymic : "",
  );
  const [birthday, setBirthday] = useState<string>(isEdit ? user.birthday : "");
  const [passport, setPassport] = useState<string>(isEdit ? user.passport : "");
  const [address, setAddress] = useState<string>(isEdit ? user.address : "");
  const [phone, setPhone] = useState<string>(isEdit ? user.phone : "");
  const [family, setFamily] = useState<string>(
    isEdit ? user.familyComposition : "",
  );
  const [sex, setSex] = useState<UserSexType>(isEdit ? user.gender : null);
  const [error, setError] = useState<string>(" ");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

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
    const filterDotValue = value.replace(".", "");
    const onlyNumberValue = filterDotValue.match(onlyNumberRegExp);
    if ((onlyNumberValue || !filterDotValue) && filterDotValue.length < 10) {
      const currentYear = new Date().getFullYear();
      const prevDot = (str: string) => (str.length ? "." : "");
      const replaceDot = (str: string) => str.replace(".", "");

      let day = replaceDot(filterDotValue).substring(0, 2);
      let month = replaceDot(filterDotValue).substring(2, 4);
      let year = replaceDot(filterDotValue).substring(4);

      console.log(day, +day < 10);

      if (+day > 31) day = `31`;
      if (+month > 12) month = `12`;
      if (+year > currentYear) year = `${currentYear}`;
      if (+year < 1900 && year.length == 4) year = `1900`;

      setBirthday(`${day}${prevDot(month)}${month}${prevDot(year)}${year}`);
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
    if (value.length <= 11) {
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

  const handleChangeFamily = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setFamily(e.nativeEvent.text);
  };

  const personalDataFIOProps: IPersonalDataFioProps = useMemo(() => {
    return {
      lastname,
      firstName: firstname,
      patronymic,
      handleChangeLastname: handleChangeStringState(setLastname),
      handleChangeFirstName: handleChangeStringState(setFirstname),
      handleChangePatronymic: handleChangeStringState(setPatronymic),
    };
  }, [lastname, firstname, patronymic]);

  const personalDataBirthdayProps: IPersonalDataBirthdayProps = useMemo(
    () => ({
      birthday,
      handleChangeBirthday,
    }),
    [birthday],
  );

  const personalDataPassportProps = useMemo(
    () =>
      ({
        passport,
        handleChangePassport,
      } as IPersonalDataPassportProps),
    [passport],
  );

  const personalDataLocationProps = useMemo(
    () =>
      ({
        address,
        handleChangeAddress,
      } as IPersonalDataLocationProps),
    [address],
  );

  const personalDataPhoneProps = useMemo(
    () =>
      ({
        phone,
        handleChangePhone,
      } as IPersonalDataPhoneProps),
    [phone],
  );

  const personalDataFamilyProps = useMemo(
    () =>
      ({
        family,
        handleChangeFamily,
      } as IPersonalDataFamilyProps),
    [family],
  );

  const personalDataSexProps = useMemo(
    () =>
      ({
        sex,
        handleChangeSex,
      } as IPersonalDataSexProps),
    [sex],
  );

  const handleSubmitPersonalData = () => {
    setIsSubmit(true);
    if (
      lastname &&
      firstname &&
      patronymic &&
      birthday &&
      passport &&
      address &&
      phone &&
      family &&
      sex
    ) {
      handleRegisterUser({
        name: firstname,
        surname: lastname,
        patronymic,
        birthday,
        address,
        passport,
        phone,
        gender: sex,
        familyComposition: family,
        setError,
      });
      return;
    }
    setError("Заполните все поля");
  };

  useEffect(() => {
    if (
      lastname &&
      firstname &&
      patronymic &&
      birthday &&
      passport &&
      address &&
      phone &&
      family &&
      sex
    ) {
      setError(" ");
    } else {
      if (isSubmit) {
        setError("Заполните все поля");
      }
    }
  }, [
    lastname,
    firstname,
    patronymic,
    birthday,
    passport,
    address,
    phone,
    family,
    sex,
  ]);

  return {
    error,
    isSubmit,
    personalDataSexProps,
    personalDataFIOProps,
    personalDataPhoneProps,
    personalDataFamilyProps,
    personalDataBirthdayProps,
    personalDataPassportProps,
    personalDataLocationProps,
    handleSubmitPersonalData,
  };
};
