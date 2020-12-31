import React from "react";
import { Anchor, Box, Button, Header as GHeader, Nav } from "grommet";
import { Sun, Moon } from "grommet-icons";
import { AboutPanel } from "./About";
import { ThemeMode } from "../types";

type HeaderProps = {
  onThemeChange: (theme: ThemeMode) => void;
};

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const onCloseCallback = React.useCallback(() => {
    setAboutOpen(false);
  }, []);

  const themeChangeCallback = React.useCallback(() => {
    setDarkMode(!darkMode);
    props.onThemeChange(!darkMode ? "dark" : "light");
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
