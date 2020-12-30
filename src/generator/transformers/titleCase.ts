import { Transformer } from "../../types";

export const titleCase = (include: boolean): Transformer => (tokens) => {
  if (!include) {
    return tokens;
  }
  return tokens.map((token: string) =>
    token.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
  );
};
