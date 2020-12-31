import React from "react";
import { Anchor, Footer } from "grommet";
import { Github } from "grommet-icons";

export default function PCFooter() {
  return (
    <Footer justify="center" pad="small">
      <Anchor
        icon={<Github />}
        label="Samuel Lewis"
        href="https://github.com/Samuel-Lewis"
      />
    </Footer>
  );
}
