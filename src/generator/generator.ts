import { PasswordOptions, Transformer } from "../types";
import {
  adjectiveAppender,
  nounAppender,
  verbAppender,
} from "./transformers/words";
import { delimiters } from "./transformers/delimiters";

export const generatePassword = (options: PasswordOptions): string => {
  let transformers: Transformer[] = [];

  //
  // adjectiveAppender,
  //   nounAppender,
  //   verbAppender,
  // ];

  const words = new Array(options.words).fill(nounAppender);
  transformers = transformers.concat(words);

  if (options.delimiters) {
    transformers.push(delimiters(options.delimiters));
  }

  let tokens: string[] = [];
  transformers.forEach((t) => {
    tokens = t(tokens);
  });

  return tokens.join("");
};
