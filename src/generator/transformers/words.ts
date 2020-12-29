import { Transformer } from "../../types";
import { rword } from "rword";

export const wordAppender = (count: number): Transformer => (tokens) => {
  let words = rword.generate(count, { length: "3-6" });
  if (!Array.isArray(words)) {
    words = [words];
  }

  return tokens.concat(words);
};
