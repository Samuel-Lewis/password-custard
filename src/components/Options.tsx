import React from "react";
import { Box, Grid } from "grommet";
import { PasswordOptions } from "../types";
import { Delimiters } from "./options/Delimiters";
import { TitleCase } from "./options/TitleCase";
import { NumberInput } from "./options/NumberInput";

export type OptionsState = PasswordOptions;
type OptionsProps = {
  onValueChange: (newState: OptionsState) => void;
  options: OptionsState;
};

export const getDefaultOptions = (): PasswordOptions => {
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

export class Options extends React.Component<OptionsProps, OptionsState> {
  constructor(props: OptionsProps) {
    super(props);
    this.state = props.options;
  }

  handleFieldChange = <T extends keyof OptionsState, K extends OptionsState[T]>(
    field: T,
    value: K
  ): void => {
    const newState = { ...this.state, [field]: value };
    this.setState(newState);
    this.props.onValueChange(newState);
  };

  render() {
    return (
      <Box background="light-2" pad="medium" alignContent="center">
        <NumberInput
          id="words"
          value={this.state.words}
          max={8}
          handleFieldChange={this.handleFieldChange}
        />
        <NumberInput
          id="numbers"
          value={this.state.numbers}
          max={8}
          handleFieldChange={this.handleFieldChange}
        />
        <NumberInput
          id="entropy"
          value={this.state.entropy}
          handleFieldChange={this.handleFieldChange}
          title={(v) => `Entropy: ${v}%`}
        />

        <Grid columns={["flex", "flex"]} gap="medium">
          <Delimiters
            value={this.state.delimiters}
            handleFieldChange={this.handleFieldChange}
          />
          <TitleCase
            value={this.state.titleCase}
            handleFieldChange={this.handleFieldChange}
          />
          <NumberInput
            id="upperCase"
            value={this.state.upperCase}
            max={this.state.words}
            handleFieldChange={this.handleFieldChange}
            title={(v) => `Upper case: ${v}`}
          />
          <NumberInput
            id="leet"
            value={this.state.leet}
            handleFieldChange={this.handleFieldChange}
            title={(v) => `Leet: ${v}%`}
          />
        </Grid>
      </Box>
    );
  }
}
