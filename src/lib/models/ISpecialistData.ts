export type TypeSpecialistNumberSocialHelp =
  | "1.1."
  | "1.2."
  | "1.3."
  | "1.4."
  | "1.5."
  | "1.6."
  | "1.7."
  | "1.8."
  | "1.9."
  | "1.10."
  | "1.11."
  | "1.12."
  | "1.13."
  | "1.14."
  | "1.15."
  | "1.16."
  | "1.17.";

export type TypeSpecialistNumberSocialServices =
  | "2.1.1."
  | "2.1.2."
  | "2.1.3."
  | "2.1.4."
  | "2.1.5."
  | "2.2.1."
  | "2.2.2."
  | "2.2.3."
  | "2.2.4.";

export type TypeSpecialistNumberGuardianship =
  | "3.1."
  | "3.2."
  | "3.3."
  | "3.4."
  | "3.5."
  | "3.6."
  | "3.7."
  | "3.8.";

export interface ISpecialistPersonalData {
  name: string;
  phone?: string;
  address?: string;
  url?: string;
  geo?: [number, number];
}

export interface ISpecialistModel {
  specialistNumber:
    | TypeSpecialistNumberSocialHelp
    | TypeSpecialistNumberSocialServices
    | TypeSpecialistNumberGuardianship;
  specialistData: ISpecialistPersonalData[];
  phone: string;
  department: string;
}
