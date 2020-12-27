import { Transformer } from "../../types";

export const delimiters = (delimiters: string[]): Transformer => (tokens) => {
  return tokens.flatMap((value, index, array) => {
    if (index === array.length - 1) {
      return value;
    }

    const delimiter = delimiters[Math.floor(Math.random() * delimiters.length)];
    return [value, delimiter];
  });
};
