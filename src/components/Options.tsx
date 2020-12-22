import React from "react";
import { Box, RangeInput } from "grommet";

export class Options extends React.Component {
  render() {
    return (
      <Box background="light-2" pad="medium" fill alignContent="center">
        <RangeInput />
      </Box>
    );
  }
}
