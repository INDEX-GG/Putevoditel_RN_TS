export const sum = (a: number, b: number): number => a + b;

export const checkEmailValid = (email: string) =>
  email.includes("@") && email.includes(".") && email[email.length - 1] !== "@";
