import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapsible,
  Grid,
  Heading,
} from "grommet";
import React from "react";
import { generatePassword } from "../generator";
import { Options, OptionsState, defaultOptions } from "./Options";

type PasswordProps = {
  onPasswordGenerated?: (newPassword: string) => void;
};

type PasswordState = {
  currentPassword: string;
  optionsOpen: boolean;
  options: OptionsState;
};

export class Password extends React.Component<PasswordProps, PasswordState> {
  constructor(props: PasswordProps) {
    super(props);
    this.state = {
      currentPassword: '',
      optionsOpen: false,
      options: defaultOptions,
    };
  }

  componentDidMount() {
    this.createNewPassword();
  }

  createNewPassword = () => {
    const newPassword = generatePassword(this.state.options);
    this.setState({ currentPassword: newPassword });

    if (this.props.onPasswordGenerated) {
      this.props.onPasswordGenerated(newPassword);
    }
  };

  handleOptionsChange = (newState: OptionsState) => {
    this.setState({ options: newState }, () => {this.createNewPassword()});
  };

  render() {
    return (
      <Card alignContent="stretch" width="large" align="stretch">
        <CardHeader pad="medium" background="light-3">
          Your new password is...
        </CardHeader>
        <CardBody align="center" pad="medium" background="light-1">
          <Heading level={2}>{this.state.currentPassword}</Heading>
        </CardBody>

        <CardFooter background="light-3">
          <Grid
            align="center"
            fill="horizontal"
            margin="medium"
            columns={["1/3", "1/3", "1/3"]}
          >
            <Box />
            <Box>
              <Button
                primary
                label="Generate"
                size="large"
                onClick={this.createNewPassword}
              />
            </Box>
            <Box align="end">
              <Button
                label="Options"
                onClick={() => {
                  this.setState({ optionsOpen: !this.state.optionsOpen });
                }}
              />
            </Box>
          </Grid>
        </CardFooter>
        <Collapsible open={this.state.optionsOpen} direction={"vertical"}>
          <Options onValueChange={this.handleOptionsChange} />
        </Collapsible>
      </Card>
    );
  }
}
