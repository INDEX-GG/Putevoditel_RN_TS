import { GenderType } from "../../types/types";

export interface IUserModel {
  id: number;
  uuid: string;
  email: string;
  phone: string;
  name: string;
  surname: string;
  patronymic: string;
  birthday: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
  lastLoginAt?: string;
  address: string;
  familyComposition: string;
  gender: GenderType;
  passport: string;
}

export type TypeGetUserKeyUnion = keyof IUserModel;
