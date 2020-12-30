import React from "react";
import { Box, Heading, RangeInput } from "grommet";
import { HandleFieldChange, PasswordOptions } from "../../types";

type NumberInputProps = {
  id: keyof PasswordOptions;
  value: number;
  handleFieldChange: HandleFieldChange;
  title?: (value: number) => string;
  min?: number;
  max?: number;
};

export const NumberInput: React.FunctionComponent<NumberInputProps> = (
  props
) => {
  const { id, value, handleFieldChange, min, max } = props;
  const name = id.charAt(0).toUpperCase() + id.slice(1);
  const title = props.title || ((v) => `${name}: ${v}`);

  return (
    <Box
      direction="row-responsive"
      align="baseline"
      justify="between"
      margin="none"
      pad="small"
    >
      <Box width="small" pad="none" margin="none">
        <Heading level={4} margin="none">
          {title(value)}
        </Heading>
      </Box>

      <RangeInput
        value={value}
        name={id}
        min={min || 0}
        max={max || 100}
        onChange={(event) => handleFieldChange(id, Number(event.target.value))}
      />
    </Box>
  );
};
