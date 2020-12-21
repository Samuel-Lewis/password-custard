import React from "react";
import {
  Box,
  Button,
  Grid,
  Grommet,
  Heading,
  Layer,
  Main,
  WorldMap,
} from "grommet";
import Footer from "./components/Footer";
import { Announce } from "grommet-icons";
import theme from "./theme";

function WIP() {
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

function App() {
  return (
    <Grommet theme={theme} full>
      <WIP />
      <Grid fill rows={["flex", "auto"]}>
        <Main pad="large" align="center">
          <Heading textAlign="center">PASSWORD CUSTARD</Heading>
          <Button
            primary
            label="CLICK ME"
            type="submit"
            onClick={() => {
              console.log("CLICK");
            }}
          />
          <WorldMap />
        </Main>
        <Footer />
      </Grid>
    </Grommet>
  );
}

export default App;
