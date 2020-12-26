import { Anchor, Button, Header, Nav } from "grommet";
import React, { useState } from "react";
import { AboutPanel } from "./About";

export default function PCHeader() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const onClose = () => {
    setAboutOpen(false);
  };

  return (
    <>
      {aboutOpen && <AboutPanel onClose={onClose} />}
      <Header background="brand">
        <Nav direction="row">
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
            onClick={() => {
              setAboutOpen(true);
            }}
          />
        </Nav>
      </Header>
    </>
  );
}
