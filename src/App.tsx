import React, { useState } from "react";
import { Grid, Grommet, Heading, Main } from "grommet";
import PCFooter from "./components/Footer";
import { Password } from "./components/Password";
import { History } from "./components/History";
import theme from "./theme";

function App() {
  const [history, setHistory] = useState([] as string[]);

  const onNewPassword = (newPassword: string) => {
    setHistory([newPassword, ...history]);
  };

  return (
    <Grommet theme={theme} full>
      <Grid fill rows={["flex", "auto"]}>
        <Main
          pad="medium"
          align="center"
          background={{
            image: `url(${process.env.PUBLIC_URL}/bg_pattern.png)`,
            repeat: "repeat",
            size: "xsmall",
          }}
        >
          <Heading margin="small" textAlign="center">
            PASSWORD CUSTARD
          </Heading>
          <Password onPasswordGenerated={onNewPassword} />
          <History passwords={history} />
        </Main>
        <PCFooter />
      </Grid>
    </Grommet>
  );
}

export default App;
