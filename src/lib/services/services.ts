import { GenderType } from "../../types/types";

export const sum = (a: number, b: number): number => a + b;

export const checkEmailValid = (email: string) =>
  email.includes("@") && email.includes(".") && email[email.length - 1] !== "@";

export const getNormalDate = (date: string): string =>
  date.replace(/-/g, ".").split(".").reverse().join(".");

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
