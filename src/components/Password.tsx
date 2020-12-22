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
import { Options } from "./Options";

type PasswordProps = {
  onPasswordGenerated?: (newPassword: string) => void;
};

type PasswordState = {
  currentPassword: string;
  optionsOpen: boolean;
};

export class Password extends React.Component<PasswordProps, PasswordState> {
  constructor(props: PasswordProps) {
    super(props);
    const iniPassword = generatePassword({ words: 1 });
    this.state = {
      currentPassword: iniPassword,
      optionsOpen: false,
    };

    if (props.onPasswordGenerated) {
      props.onPasswordGenerated(iniPassword);
    }
  }

  setNewPassword = () => {
    const options = { words: 1 };
    const newPassword = generatePassword(options);
    this.setState({ currentPassword: newPassword });

    if (this.props.onPasswordGenerated) {
      this.props.onPasswordGenerated(newPassword);
    }
  };

  render() {
    return (
      <Card alignContent="stretch" width="large" align="stretch">
        <CardHeader pad="medium" background="light-2">
          Your new password is...
        </CardHeader>
        <CardBody align="center" pad="medium" background="light">
          <Heading level={2}>{this.state.currentPassword}</Heading>
        </CardBody>

        <CardFooter background="light-2">
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
                onClick={this.setNewPassword}
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
          <Options />
        </Collapsible>
      </Card>
    );
  }
}
