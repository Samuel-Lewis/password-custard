import SecureRNG from "secure-rng";
import { Transformer } from "../../types";
import { leetSubstitutes } from "../resources/leet";
import { getTokenIndicies, shuffleArray } from "../utils";

export const leet = (percent: number): Transformer => (tokens) => {
  const shuffleIndices = shuffleArray(getTokenIndicies(tokens)).filter(
    ({ char }) => leetSubstitutes[char].length > 0
  );

  const selectEntropy = shuffleIndices.slice(
    0,
    Math.round((percent / 100) * shuffleIndices.length)
  );

  selectEntropy.forEach(({ tokenIndex, stringIndex, char }) => {
    const token = tokens[tokenIndex];
    const replacement = SecureRNG.GenerateString(
      1,
      leetSubstitutes[char].join("")
    );

    tokens[tokenIndex] =
      token.substr(0, stringIndex) +
      replacement +
      token.substr(stringIndex + replacement.length);
  });

  return tokens;
};
