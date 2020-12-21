import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ResetStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
