import { GenderType } from "../../types/types";

export const sum = (a: number, b: number): number => a + b;

export const checkEmailValid = (email: string) =>
  email.includes("@") && email.includes(".") && email[email.length - 1] !== "@";

export const getNormalDate = (date: string): string =>
  date.replace(/-/g, ".").split(".").reverse().join(".");

export const onlyNumberString = (str: string) => str.replace(/[\D]+/g, "");

export const getNormalGender = (gender: GenderType): string => {
  switch (gender) {
    case "female":
      return "Женщина";
    case "male":
      return "Мужчина";
    default:
      return gender;
  }
};

export const getBirthdayBackendData = (birthday: string) => {
  const birthdayArr = birthday.split(".");
  const birthdayYear = birthdayArr[2];
  const birthdayMonth = birthdayArr[1];
  const birthdayDay = birthdayArr[0];
  return `${birthdayYear}-${birthdayMonth}-${birthdayDay}`;
};

export const telephoneMask = (state: string) => {
  let inputNumbersValue = onlyNumberString(state);

  let formattedInputValue = "";

  /*! Если пустая строка */
  if (!inputNumbersValue) {
    return "";
  }
  if (inputNumbersValue[0].match(/[1-6, 9]/))
    inputNumbersValue = "7" + inputNumbersValue;
  formattedInputValue = "+7 ";
  if (inputNumbersValue.length > 1) {
    formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
  }
  if (inputNumbersValue.length >= 5) {
    formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
  }
  if (inputNumbersValue.length >= 8) {
    formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
  }
  if (inputNumbersValue.length >= 10) {
    formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
  }

  if (state.length >= 0 && state.length <= 18) {
    return formattedInputValue;
  }
  return formattedInputValue;
};
