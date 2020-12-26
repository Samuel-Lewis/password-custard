import { Transformer } from "../types";
import { nouns } from "../resources/nouns";
import { verbs } from "../resources/verbs";
import { adjectives } from "../resources/adjectives";

const appenderFactory = (wordSelection: string[]): Transformer => (
  tokens: string[]
) => {
  const r = Math.floor(Math.random() * wordSelection.length - 1);
  return [...tokens, wordSelection[r]];
};

export const nounAppender = appenderFactory(nouns);
export const verbAppender = appenderFactory(verbs);
export const adjectiveAppender = appenderFactory(adjectives);
