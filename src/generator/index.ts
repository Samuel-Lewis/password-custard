import { PasswordOptions, Transformer } from "./types";
import {
  nounAppender,
  adjectiveAppender,
  verbAppender,
} from "./transformers/words";
import { splitter } from "./transformers/splitter";

export const generatePassword = (options: PasswordOptions): string => {
  let transformers: Transformer[] = [
    adjectiveAppender,
    nounAppender,
    verbAppender,
  ];

  if (options.delimiter) {
    transformers.push(splitter(options.delimiter));
  }

  let tokens: string[] = [];
  transformers.forEach((t) => {
    tokens = t(tokens);
  });

  return tokens.join("");
};
