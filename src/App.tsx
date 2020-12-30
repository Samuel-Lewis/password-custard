import React from "react";
import { Box, Grid, Grommet, Heading, Main } from "grommet";
import styled from "styled-components";
import PCFooter from "./components/Footer";
import PCHeader from "./components/Header";
import { History } from "./components/History";
import { Password } from "./components/Password";
import theme from "./theme";

const BorderHeading = styled(Heading)`
  text-transform: uppercase;
`;

function App() {
  const [history, setHistory] = React.useState([] as string[]);

  const onNewPassword = (newPassword: string) => {
    setHistory([newPassword, ...history]);
  };

  return (
    <Grommet theme={theme} full>
      <Grid fill rows={["auto", "flex", "auto"]}>
        <PCHeader />
        <Main
          pad="medium"
          align="center"
          background={{
            image: `url(${process.env.PUBLIC_URL}/bg_pattern.png)`,
            repeat: "repeat",
            size: "xsmall",
          }}
        >
          <Box fill width={{ max: "large" }}>
            <Grid alignContent="center" rows={["auto", "fill", "auto"]}>
              <BorderHeading margin="medium" textAlign="center">
                Password Custard
              </BorderHeading>
              <Password onPasswordGenerated={onNewPassword} />
              <History passwords={history} />
            </Grid>
          </Box>
        </Main>
        <PCFooter />
      </Grid>
    </Grommet>
  );
}

export default App;
