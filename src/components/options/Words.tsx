import { Box, Heading, RangeInput } from "grommet";
import React from "react";
import { HandleFieldChange, PasswordOptions } from "../../types";

type WordsProps = {
  handleFieldChange: HandleFieldChange;
  value: PasswordOptions["words"];
};

export const Words: React.FunctionComponent<WordsProps> = (props) => {
  const { handleFieldChange, value } = props;
  return (
    <Box>
      <Heading level={4} margin="small">
        Words: {value}
      </Heading>

      <RangeInput
        value={value}
        min={1}
        max={10}
        // @ts-ignore
        onChange={(event) =>
          handleFieldChange("words", Number(event.target.value))
        }
      />
    </Box>
  );
};
