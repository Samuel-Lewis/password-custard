export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getTokenIndicies = (tokens: string[]) => {
  return tokens.flatMap((token, tokenIndex) =>
    token.split("").map((_, stringIndex) => ({ tokenIndex, stringIndex }))
  );
};
