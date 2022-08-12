export interface IUserModel {
  id: number;
  uuid: string;
  email?: string;
  phone?: string;
  name: string;
  surname: string;
  patronymic: string;
  birthday: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
  lastLoginAt?: string;
}
