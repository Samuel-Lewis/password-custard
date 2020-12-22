import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
} from "grommet";
import { useState } from "react";
import { generatePassword } from "../generator";
import { Options } from "./Options";

export default function Password() {
  const [currentPassword, setCurrentPassword] = useState("hunter2");
  const [optionsOpen, setOptionsOpen] = useState(false);
  function handleClick() {
    const options = { words: 1 };
    const pw = generatePassword(options);
    setCurrentPassword(pw);
  }

  return (
    <Card alignContent="stretch" width="large" align="stretch">
      <CardHeader pad="medium" background="light-2">
        Your new password is...
      </CardHeader>
      <CardBody align="center" pad="medium" background="light">
        <Heading level={2}>{currentPassword}</Heading>
      </CardBody>

      <CardFooter background="light-2">
        <Grid
          align="center"
          margin="medium"
          fill="horizontal"
          columns={["1/3", "1/3", "1/3"]}
        >
          <Box />
          <Box>
            <Button
              primary
              label="Generate"
              size="large"
              onClick={handleClick}
            />
          </Box>
          <Box align="end">
            <Button
              label="Options"
              onClick={() => {
                setOptionsOpen(!optionsOpen);
              }}
            />
          </Box>
        </Grid>
        <Box>
          <Options />
        </Box>
      </CardFooter>
    </Card>
  );
}
