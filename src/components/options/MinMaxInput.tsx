import React from "react";
import { Box, RangeSelector, Stack, Text } from "grommet";
import { NumberRange } from "../../types";

type MinMaxInputProps = {
  onChange: (value: NumberRange) => void;
  values: number[];
  startValue: NumberRange;
};

export const MinMaxInput: React.FunctionComponent<MinMaxInputProps> = (
  props
) => {
  const { startValue, onChange, values } = props;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const step = 10;

  return (
    <Stack>
      <Box direction="row" justify="between">
        {values.map((v) => (
          <Box
            key={`${v}-text`}
            width="xxsmall"
            height="xxsmall"
            align="center"
            pad="small"
            border={false}
          >
            <Text>{v}</Text>
          </Box>
        ))}
      </Box>
      <RangeSelector
        direction="horizontal"
        min={min}
        max={max}
        step={step}
        size="full"
        round="small"
        values={[startValue.min, startValue.max]}
        // TODO Workout type for `v`
        onChange={(v: any) => onChange({ min: v[0], max: v[1] })}
      />
    </Stack>
  );
};
