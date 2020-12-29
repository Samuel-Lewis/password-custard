import { Box, Heading, RangeInput } from "grommet";
import React from "react";
import { HandleFieldChange, PasswordOptions } from "../../types";

type EntropyProps = {
  handleFieldChange: HandleFieldChange;
  value: PasswordOptions["entropy"];
};

export const Entropy: React.FunctionComponent<EntropyProps> = (props) => {
  const { handleFieldChange, value } = props;
  return (
    <Box>
      <Heading level={4} margin="small">
        Entropy: {value}%
      </Heading>

      <RangeInput
        value={value}
        min={0}
        max={100}
        // @ts-ignore
        onChange={(event) =>
          handleFieldChange("entropy", Number(event.target.value))
        }
      />
    </Box>
  );
};
