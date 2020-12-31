import React from "react";
import { Anchor, Box, Button, Header as GHeader } from "grommet";
import { Moon, Sun } from "grommet-icons";
import { AboutPanel } from "./About";
import { ThemeMode } from "../types";

type HeaderProps = {
  onThemeChange: (theme: ThemeMode) => void;
};

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const [aboutOpen, setAboutOpen] = React.useState(false);

  const startTheme = localStorage.getItem("themeMode") === "dark";
  const [darkMode, setDarkMode] = React.useState(startTheme);

  const onCloseCallback = React.useCallback(() => {
    setAboutOpen(false);
  }, []);

  const themeChangeCallback = React.useCallback(() => {
    setDarkMode(!darkMode);
    const newThemeMode = !darkMode ? "dark" : "light";
    props.onThemeChange(newThemeMode);
    localStorage.setItem("themeMode", newThemeMode);
  }, [darkMode, props]);

  return (
    <>
      {aboutOpen && <AboutPanel onClose={onCloseCallback} />}
      <GHeader background="brand">
        <Box direction="row" gap="small">
          <Button
            icon={
              <img
                alt=""
                src={`${process.env.PUBLIC_URL}/logo192.png`}
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            }
            href={process.env.PUBLIC_URL}
            hoverIndicator
          />
          <Anchor
            alignSelf="center"
            label="About"
            color="text"
            onClick={() => setAboutOpen(true)}
          />
        </Box>

        <Button
          onClick={themeChangeCallback}
          icon={darkMode ? <Sun color="text" /> : <Moon color="text" />}
          hoverIndicator
          tip={`Switch to ${darkMode ? "light" : "dark"} mode`}
        />
      </GHeader>
    </>
  );
};
