import { PasswordOptions, Transformer } from "../types";
import { wordAppender } from "./transformers/words";
import { delimiters } from "./transformers/delimiters";
import { entropy } from "./transformers/entropy";
import { upperCase } from "./transformers/upperCase";
import { titleCase } from "./transformers/titleCase";

export const generatePassword = (options: PasswordOptions): string => {
  let transformers: Transformer[] = [
    wordAppender(options.words),
    titleCase(),
    upperCase(options.upperCase),
    delimiters(options.delimiters),
    entropy(options.entropy),
  ];

  let tokens: string[] = [];
  transformers.forEach((t) => {
    tokens = t(tokens);
  });

  return tokens.join("");
};
