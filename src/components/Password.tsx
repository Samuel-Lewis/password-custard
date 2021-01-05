import React from "react";
import copyTextToClipboard from "copy-text-to-clipboard";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapsible,
  Heading,
} from "grommet";
import { Configure, Copy } from "grommet-icons";
import styled from "styled-components";
import { HandleFieldChange, PasswordOptions } from "../types";
import { getDefaultOptions, Options } from "./Options";

const PasswordField = styled(Heading)`
  font-family: "Monaco";
  text-align: center;
  overflow: auto;
`;

type PasswordProps = {
  onPasswordGenerated?: (newPassword: string) => void;
};

type PasswordState = {
  currentPassword: string;
  optionsOpen: boolean;
  options: PasswordOptions;
  justCopied: boolean;
  generatorFunc?: (options: PasswordOptions) => string;
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
    import("../generator/generator").then(({ generatePassword }) => {
      this.setState({ generatorFunc: generatePassword }, () => {
        this.createNewPassword();
      });
    });
  }

  createNewPassword = () => {
    const { generatorFunc, options } = this.state;

    if (!generatorFunc) {
      return "";
    }

    const newPassword = generatorFunc(options); //generatePassword(this.state.options);
    this.setState({ currentPassword: newPassword });

    if (this.props.onPasswordGenerated) {
      this.props.onPasswordGenerated(newPassword);
    }
  };

  writeToLocal = () => {
    localStorage.setItem("passwordOptions", JSON.stringify(this.state.options));
  };

  handleOptionsChange: HandleFieldChange = (field, value) => {
    const newOptions = {
      ...this.state.options,
      [field]: value,
    };

    this.setState({ options: newOptions }, () => {
      this.createNewPassword();
      this.writeToLocal();
    });
  };

  handleCopy = () => {
    this.setState({ justCopied: true });
    copyTextToClipboard(this.state.currentPassword);
  };

  render() {
    return (
      <Card elevation="none" border>
        <CardHeader pad="medium" background="background-back">
          Your new password is...
        </CardHeader>
        <CardBody align="center" pad="none" background="background-front">
          <PasswordField margin={{ top: "large", bottom: "large" }} level={3}>
            {this.state.generatorFunc
              ? this.state.currentPassword
              : "Loading dictionary..."}
          </PasswordField>
        </CardBody>

        <CardFooter background="background-back" direction="row" pad="small">
          <Button
            onClick={this.handleCopy}
            onMouseOut={() => {
              this.setState({ justCopied: false });
            }}
            icon={<Copy size="medium" />}
            size="large"
            tip={this.state.justCopied ? "Copied!" : "Copy to clipboard"}
            title="Copy to clipboard"
            hoverIndicator
          />
          <Button
            primary
            label="Generate"
            size="large"
            onClick={this.createNewPassword}
          />
          <Button
            icon={<Configure size="medium" />}
            size="large"
            onClick={() => {
              this.setState({ optionsOpen: !this.state.optionsOpen });
            }}
            tip="Options"
            title="Options"
            hoverIndicator
          />
        </CardFooter>
        <Collapsible open={this.state.optionsOpen} direction="vertical">
          <Options
            onFieldChange={this.handleOptionsChange}
            options={this.state.options}
          />
        </Collapsible>
      </Card>
    );
  }
}
