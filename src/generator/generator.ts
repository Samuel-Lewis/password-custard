import { PasswordOptions, Transformer } from "../types";
import { entropy } from "./transformers/entropy";
import { delimiters } from "./transformers/delimiters";
import { leet } from "./transformers/leet";
import { number } from "./transformers/number";
import { titleCase } from "./transformers/titleCase";
import { upperCase } from "./transformers/upperCase";
import { wordAppender } from "./transformers/words";

export const generatePassword = (options: PasswordOptions): string => {
  let transformers: Transformer[] = [
    wordAppender(options.words),
    leet(options.leet),
    titleCase(options.titleCase),
    upperCase(options.upperCase),
    number(options.numbers),
    delimiters(options.delimiters),
    entropy(options.entropy),
  ];

  let tokens: string[] = [];
  transformers.forEach((t, i) => {
    tokens = t(tokens);
  });

  return tokens.join("");
};
