import { rword } from "rword";
import { Transformer } from "../../types";

export const wordAppender = (count: number): Transformer => (tokens) => {
  if (count === 0) {
    return [];
  }

  let words = rword.generate(count, { length: "3-6" });
  if (!Array.isArray(words)) {
    words = [words];
  }

  return tokens.concat(words);
};
