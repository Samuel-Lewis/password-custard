import { Box, Heading, Layer } from "grommet";
import { Announce } from "grommet-icons";
import React from "react";

export default function WIP() {
  return (
    <Layer>
      <Box pad="medium" width="medium" align="center">
        <Heading level={"3"}>
          <Announce /> Under construction
        </Heading>
      </Box>
    </Layer>
  );
}
