import React from "react";
import { Box, Grid, Grommet, Heading, Main } from "grommet";
import styled from "styled-components";
import PCFooter from "./components/Footer";
import { Header } from "./components/Header";
import { History } from "./components/History";
import { Password } from "./components/Password";
import { genTheme } from "./theme";
import { ThemeMode } from "./types";

const BorderHeading = styled(Heading)`
  text-transform: uppercase;
`;

function App() {
  const [history, setHistory] = React.useState([] as string[]);

  const startTheme = (localStorage.getItem("themeMode") ||
    "light") as ThemeMode;
  const [theme, setTheme] = React.useState<ThemeMode>(startTheme);

  const onNewPassword = (newPassword: string) => {
    setHistory([newPassword, ...history]);
  };

  return (
    <Grommet theme={genTheme} full themeMode={theme}>
      <Grid fill rows={["auto", "flex", "auto"]}>
        <Header onThemeChange={setTheme} />

        <Main
          pad="medium"
          align="center"
          background={{
            image: `url(${process.env.PUBLIC_URL}/bg_pattern_${theme}.png)`,
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
