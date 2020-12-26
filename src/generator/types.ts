export interface Transformer {
  (tokens: string[]): string[];
}

export type PasswordOptions = {
  words: number;
  delimiter?: string;
};
