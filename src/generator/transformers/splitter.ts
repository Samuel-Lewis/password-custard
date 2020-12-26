import { Transformer } from "../types";

export const splitter = (delimiter: string): Transformer => (tokens) => {
  return tokens.flatMap((value, index, array) =>
    array.length - 1 !== index ? [value, delimiter] : value
  );
};
