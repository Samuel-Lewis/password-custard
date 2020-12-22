import React from "react";
import { Grid, Grommet, Heading, Main } from "grommet";
import PCFooter from "./components/Footer";
import WIP from "./components/WIP";
import Password from "./components/Password";
import theme from "./theme";

function App() {
  return (
    <Grommet theme={theme} full>
      {false && <WIP />}
      <Grid fill rows={["flex", "auto"]}>
        <Main pad="large" align="center">
          <Heading textAlign="center">PASSWORD CUSTARD</Heading>
          <Password />
        </Main>
        <PCFooter />
      </Grid>
    </Grommet>
  );
}

export default App;
