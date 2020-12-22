import React from "react";
import { Box, Text } from "grommet";

const HISTORY_LENGTH = 10;

type HistoryProps = {
  passwords: string[];
};

export const History: React.FunctionComponent<HistoryProps> = (props) => {
  const display = props.passwords.slice(1, HISTORY_LENGTH).map((pw) => {
    return (
      <Text textAlign="center" key={pw}>
        {pw}
      </Text>
    );
  });

  return (
    <Box pad="medium" overflow="hidden">
      {display}
    </Box>
  );
};
