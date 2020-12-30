import React from "react";
import { Box, Meter } from "grommet";
// @ts-ignore
import passwordMeter from "passwordmeter";
import styled from "styled-components";

const ColouredMeter = styled(Meter)``;

type StrengthMeterProps = {
  password: string;
};

export const StrengthMeter: React.FunctionComponent<StrengthMeterProps> = (
  props
) => {
  const score = passwordMeter.checkPass(props.password);

  return (
    <Box pad="none" margin="none" width="stretch">
      <ColouredMeter
        values={[{ value: score }]}
        type="bar"
        thickness="small"
        margin="none"
        size="full"
      />
    </Box>
  );
};
