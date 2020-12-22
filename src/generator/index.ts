import { nouns } from "./resources/nouns";

export type PasswordOptions = {
  words: number;
};

export const generatePassword = (options: PasswordOptions): string => {
  const r = Math.floor(Math.random() * nouns.length - 1);
  return nouns[r];
};
