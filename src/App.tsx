import React from "react";
import { ThemeProvider, Global } from "@emotion/react";
import { globalTheme, globalStyles } from "./theme";
import { Title } from "./components/Title";

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Global styles={globalStyles} />
      <Title>Password Custard</Title>
    </ThemeProvider>
  );
}

export default App;
