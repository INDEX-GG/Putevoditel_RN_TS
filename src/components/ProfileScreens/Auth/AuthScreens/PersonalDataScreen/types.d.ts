import {
  TextInputChangeFunction,
  UserSexType,
} from "../../../../../types/types";

export interface IPersonalDataFioProps {
  lastname: string;
  firstName: string;
  patronymic: string;
  handleChangeLastname: TextInputChangeFunction;
  handleChangeFirstName: TextInputChangeFunction;
  handleChangePatronymic: TextInputChangeFunction;
}

export interface IPersonalDataBirthdayProps {
  birthday: string;
  handleChangeBirthday: TextInputChangeFunction;
}

export interface IPersonalDataPassportProps {
  passport: string;
  handleChangePassport: TextInputChangeFunction;
}

export interface IPersonalDataLocationProps {
  address: string;
  handleChangeAddress: TextInputChangeFunction;
}

export interface IPersonalDataPhoneProps {
  phone: string;
  handleChangePhone: TextInputChangeFunction;
}

export interface IPersonalDataSexProps {
  sex: UserSexType;
  handleChangeSex: (state: UserSexType) => () => void;
}

export interface IPersonalDataFamilyProps {
  family: string;
  handleChangeFamily: TextInputChangeFunction;
}
