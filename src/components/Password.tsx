import React from "react";
import copyTextToClipboard from "copy-text-to-clipboard";
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
import { Copy } from "grommet-icons";
import { generatePassword } from "../generator/generator";
import { getDefaultOptions, Options, OptionsState } from "./Options";

import styled from "styled-components";
import { StrengthMeter } from "./Strength";

const PasswordField = styled(Heading)`
  font-family: "Monaco";
  text-align: center;
  overflow: scroll;
`;

type PasswordProps = {
  onPasswordGenerated?: (newPassword: string) => void;
};

type PasswordState = {
  currentPassword: string;
  optionsOpen: boolean;
  options: OptionsState;
  justCopied: boolean;
};

export class Password extends React.Component<PasswordProps, PasswordState> {
  constructor(props: PasswordProps) {
    super(props);
    this.state = {
      currentPassword: "",
      optionsOpen: false,
      options: getDefaultOptions(),
      justCopied: false,
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
    this.setState({ options: newState }, () => {
      this.createNewPassword();
    });
  };

  handleCopy = () => {
    this.setState({ justCopied: true });
    copyTextToClipboard(this.state.currentPassword);
  };

  render() {
    return (
      <Card>
        <CardHeader pad="medium" background="light-3">
          Your new password is...
        </CardHeader>
        <CardBody align="center" pad="none" background="light-1">
          <PasswordField margin={{ top: "large", bottom: "large" }} level={3}>
            {this.state.currentPassword}
          </PasswordField>
          <StrengthMeter password={this.state.currentPassword} />
        </CardBody>

        <CardFooter background="light-3">
          <Grid
            align="center"
            fill="horizontal"
            margin="medium"
            columns={["1/4", "1/2", "1/4"]}
          >
            <Box align="start">
              <Button
                plain={false}
                onClick={this.handleCopy}
                onMouseOut={() => {
                  this.setState({ justCopied: false });
                }}
                icon={<Copy size="medium" />}
                size="medium"
                tip={this.state.justCopied ? "Copied!" : "Copy to clipboard"}
                title="Copy to clipboard"
                hoverIndicator
              />
            </Box>
            <Button
              primary
              label="Generate"
              size="large"
              onClick={this.createNewPassword}
            />
            <Box align="end">
              <Button
                label="Options"
                size="medium"
                onClick={() => {
                  this.setState({ optionsOpen: !this.state.optionsOpen });
                }}
              />
            </Box>
          </Grid>
        </CardFooter>
        <Collapsible open={this.state.optionsOpen} direction="vertical">
          <Options
            onValueChange={this.handleOptionsChange}
            options={this.state.options}
          />
        </Collapsible>
      </Card>
    );
  }
}
