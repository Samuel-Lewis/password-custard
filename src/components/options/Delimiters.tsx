import { Box, CheckBoxGroup, Heading } from "grommet";
import React from "react";
import { HandleFieldChange, PasswordOptions } from "../../types";

type DelimitersProps = {
  handleFieldChange: HandleFieldChange;
  value: PasswordOptions["delimiters"];
};

export const Delimiters: React.FunctionComponent<DelimitersProps> = (props) => {
  const { handleFieldChange, value } = props;
  return (
    <Box>
      <Heading level={4} margin="small">
        Delimiters
      </Heading>

      <CheckBoxGroup
        name="Delimiters"
        value={value}
        // @ts-ignore TODO workout type for `event`
        onChange={(event) => handleFieldChange("delimiters", event.value)}
        options={[
          { label: "Hyphen", value: "-" },
          { label: "Underscore", value: "_" },
          { label: "Space", value: " " },
        ]}
      />
    </Box>
  );
};
