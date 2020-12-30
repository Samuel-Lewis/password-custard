import React from "react";
import { Box, CheckBox, Heading } from "grommet";
import { HandleFieldChange, PasswordOptions } from "../../types";

type TitleCaseProps = {
  handleFieldChange: HandleFieldChange;
  value: PasswordOptions["titleCase"];
};

export const TitleCase: React.FunctionComponent<TitleCaseProps> = (props) => {
  const { handleFieldChange, value } = props;
  return (
    <Box>
      <CheckBox
        toggle
        label={<Heading level={4}>Title Case</Heading>}
        checked={value}
        onChange={(event) =>
          handleFieldChange("titleCase", event.target.checked)
        }
      />
    </Box>
  );
};
