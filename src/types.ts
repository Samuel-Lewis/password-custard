export interface Transformer {
  (tokens: string[]): string[];
}

export type PasswordOptions = {
  words: number;
  delimiters: string[];
};

export type HandleFieldChange = <
  T extends keyof PasswordOptions,
  K extends PasswordOptions[T]
>(
  field: T,
  value: K
) => void;
