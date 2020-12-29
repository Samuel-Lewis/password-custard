import { Transformer } from "../../types";

export const delimiters = (delimiters: string[]): Transformer => (tokens) => {
  if (delimiters.length === 0) {
    return tokens;
  }

  return tokens.flatMap((value, index, array) => {
    if (index === array.length - 1) {
      return value;
    }

    const delimiter = delimiters[Math.floor(Math.random() * delimiters.length)];
    return [value, delimiter];
  });
};
