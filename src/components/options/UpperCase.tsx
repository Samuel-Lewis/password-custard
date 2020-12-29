import { Box, Heading, RangeInput } from "grommet";
import React from "react";
import { HandleFieldChange, PasswordOptions } from "../../types";

type UpperCaseProps = {
  handleFieldChange: HandleFieldChange;
  value: PasswordOptions["upperCase"];
  maxWords: number;
};

export const UpperCase: React.FunctionComponent<UpperCaseProps> = (props) => {
  const { handleFieldChange, value, maxWords } = props;
  return (
    <Box>
      <Heading level={4} margin="small">
        Upper Case: {value} word{value === 1 ? "" : "s"}
      </Heading>

      <RangeInput
        value={value}
        min={0}
        max={maxWords}
        // @ts-ignore
        onChange={(event) =>
          handleFieldChange("upperCase", Number(event.target.value))
        }
      />
    </Box>
  );
};
