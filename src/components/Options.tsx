import React from "react";
import { Box } from "grommet";
import { HandleFieldChange, PasswordOptions } from "../types";
import { Delimiters } from "./options/Delimiters";
import { TitleCase } from "./options/TitleCase";
import { NumberInput } from "./options/NumberInput";

type OptionsProps = {
  onFieldChange: HandleFieldChange;
  options: PasswordOptions;
};

export const getDefaultOptions = (): PasswordOptions => {
  const local = localStorage.getItem("passwordOptions");
  if (local) {
    return JSON.parse(local);
  }

  return {
    words: 3,
    numbers: 1,
    delimiters: ["-"],
    entropy: 5,
    upperCase: 1,
    titleCase: true,
    leet: 5,
  };
};

export const Options: React.FunctionComponent<OptionsProps> = (props) => {
  const { onFieldChange } = props;
  const handleFieldChange: HandleFieldChange = React.useCallback(
    (field, value) => {
      onFieldChange(field, value);
    },
    [onFieldChange]
  );

  return (
    <Box background="background-back" pad="medium" alignContent="center">
      <NumberInput
        id="words"
        value={props.options.words}
        max={8}
        handleFieldChange={handleFieldChange}
      />
      <NumberInput
        id="numbers"
        value={props.options.numbers}
        max={8}
        handleFieldChange={handleFieldChange}
      />
      <NumberInput
        id="entropy"
        value={props.options.entropy}
        handleFieldChange={handleFieldChange}
        title={(v) => `Entropy: ${v}%`}
      />

      <Box direction="row-responsive" gap="medium">
        <Box fill>
          <Delimiters
            value={props.options.delimiters}
            handleFieldChange={handleFieldChange}
          />
        </Box>
        <Box fill>
          <TitleCase
            value={props.options.titleCase}
            handleFieldChange={handleFieldChange}
          />
          <NumberInput
            id="upperCase"
            value={props.options.upperCase}
            max={props.options.words}
            handleFieldChange={handleFieldChange}
            title={(v) => `Upper case: ${v}`}
          />
          <NumberInput
            id="leet"
            value={props.options.leet}
            handleFieldChange={handleFieldChange}
            title={(v) => `Leet: ${v}%`}
          />
        </Box>
      </Box>
    </Box>
  );
};
