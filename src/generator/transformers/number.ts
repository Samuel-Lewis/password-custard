import SecureRNG from "secure-rng";
import { Transformer } from "../../types";

export const number = (count: number): Transformer => (tokens) => {
  const numbers = new Array<number>(count)
    .fill(0)
    .map((_) => SecureRNG.GenerateInteger(0, 9999));

  numbers.forEach((n) => {
    const index = SecureRNG.GenerateInteger(0, tokens.length);
    tokens.splice(index, 0, n.toString().padStart(4, "0"));
  });

  return tokens;
};
