import { Transformer } from "../../types";
import { shuffleArray } from "../utils";

export const upperCase = (count: number): Transformer => (tokens) => {
  const tokenIndices = shuffleArray(tokens.map((_, i) => i)).slice(0, count);
  tokenIndices.forEach((i) => (tokens[i] = tokens[i].toUpperCase()));
  return tokens;
};
