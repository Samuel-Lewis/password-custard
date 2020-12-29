import React from "react";
import { Box } from "grommet";
import { PasswordOptions } from "../types";
import { Delimiters } from "./options/Delimiters";
import { Words } from "./options/Words";
import { Entropy } from "./options/Entropy";
import { UpperCase } from "./options/UpperCase";
import { TitleCase } from "./options/TitleCase";

export type OptionsState = PasswordOptions;
type OptionsProps = {
  onValueChange: (newState: OptionsState) => void;
  options: OptionsState;
};

export const getDefaultOptions = (): PasswordOptions => {
  return {
    words: 3,
    delimiters: ["-"],
    entropy: 5,
    upperCase: 1,
    titleCase: true,
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
        <Words
          value={this.state.words}
          handleFieldChange={this.handleFieldChange}
        />
        <Entropy
          value={this.state.entropy}
          handleFieldChange={this.handleFieldChange}
        />
        <UpperCase
          value={this.state.upperCase}
          handleFieldChange={this.handleFieldChange}
          maxWords={this.state.words}
        />
        <Delimiters
          value={this.state.delimiters}
          handleFieldChange={this.handleFieldChange}
        />
        <TitleCase
          value={this.state.titleCase}
          handleFieldChange={this.handleFieldChange}
        />
      </Box>
    );
  }
}
