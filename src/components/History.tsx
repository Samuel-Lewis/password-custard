import React from "react";
import { Box, List } from "grommet";
import styled from "styled-components";

const HISTORY_LENGTH = 10;

const HistoryList = styled(List)`
  text-align: center;
`;

type HistoryProps = {
  passwords: string[];
};

export const History: React.FunctionComponent<HistoryProps> = (props) => {
  const display = props.passwords.slice(1, HISTORY_LENGTH);

  return (
    <Box pad="medium">
      <HistoryList border={false} pad="xsmall" data={display} />
    </Box>
  );
};
