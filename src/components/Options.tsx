import React from "react";
import { Box, CheckBox } from "grommet";
import { PasswordOptions } from "../generator/types";

export type OptionsState = PasswordOptions;
type OptionsProps = {
  onValueChange: (newState: OptionsState) => void;
};

export const defaultOptions: OptionsState = {
  words: 1,
};

export class Options extends React.Component<OptionsProps, OptionsState> {
  constructor(props: OptionsProps) {
    super(props);
    this.state = defaultOptions;
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
        <CheckBox
          label="Split words"
          toggle
          onChange={(event) =>
            this.handleFieldChange(
              "delimiter",
              event.target.checked ? "-" : undefined
            )
          }
        />
      </Box>
    );
  }
}
