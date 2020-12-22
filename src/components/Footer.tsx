import { Anchor, Footer } from "grommet";
import { Github } from "grommet-icons";
import React from "react";

export default function PCFooter() {
  return (
    <Footer background="light-4" justify="center" pad="small">
      <Anchor
        icon={<Github />}
        label="Samuel Lewis"
        href="https://github.com/Samuel-Lewis"
      />
    </Footer>
  );
}
