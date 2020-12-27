import React from "react";
import { Box } from "grommet";
import { PasswordOptions } from "../types";
import { Delimiters } from "./options/Delimiters";
import { Words } from "./options/Words";

export type OptionsState = PasswordOptions;
type OptionsProps = {
  onValueChange: (newState: OptionsState) => void;
  options: OptionsState;
};

export const getDefaultOptions = (): PasswordOptions => {
  return {
    words: 2,
    delimiters: ["-"],
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
      <Box background="light-2" pad="medium" fill alignContent="center">
        <Words
          value={this.state.words}
          handleFieldChange={this.handleFieldChange}
        />
        <Delimiters
          value={this.state.delimiters}
          handleFieldChange={this.handleFieldChange}
        />
      </Box>
    );
  }
}
