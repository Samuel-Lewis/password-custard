import { Box, Heading, CheckBox } from "grommet";
import React from "react";
import { HandleFieldChange, PasswordOptions } from "../../types";

type TitleCaseProps = {
  handleFieldChange: HandleFieldChange;
  value: PasswordOptions["titleCase"];
};

export const TitleCase: React.FunctionComponent<TitleCaseProps> = (props) => {
  const { handleFieldChange, value } = props;
  return (
    <Box direction="row">
      <Heading level={4} margin="small">
        Title Case
      </Heading>

      <CheckBox
        toggle
        checked={value}
        onChange={(v) => {
          handleFieldChange("titleCase", v.target.checked);
        }}
      />
    </Box>
  );
};
