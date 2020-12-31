export interface Transformer {
  (tokens: string[]): string[];
}

export type ThemeMode = "light" | "dark";

export type PasswordOptions = {
  words: number;
  delimiters: string[];
  entropy: number;
  upperCase: number;
  titleCase: boolean;
  leet: number;
  numbers: number;
};

export type HandleFieldChange = <
  T extends keyof PasswordOptions,
  K extends PasswordOptions[T]
>(
  field: T,
  value: K
) => void;
