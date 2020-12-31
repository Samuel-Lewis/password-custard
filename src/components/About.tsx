import React from "react";
import { Anchor, Box, Button, Heading, Layer, Paragraph } from "grommet";
import { Close } from "grommet-icons";

type AboutPanelProps = {
  onClose: () => void;
};

export const AboutPanel: React.FunctionComponent<AboutPanelProps> = (props) => {
  const { onClose } = props;
  return (
    <Layer position="center" onEsc={onClose} onClickOutside={onClose}>
      <Box pad="medium" gap="small" width="1/3">
        <Box flex={false} direction="row" justify="between">
          <Box direction="row" align="center" gap="small">
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/logo192.png`}
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            <Heading level={2}>Password Custard</Heading>
          </Box>
          <Button icon={<Close />} onClick={onClose} />
        </Box>
        <Heading level={3} margin="none">
          About
        </Heading>
        <Paragraph fill>
          Password Custard is a client side only password generator. It draws on
          long form phrases, for increased security and human consumability (eg,
          you can kinda remember it and reproduce it).{" "}
          <Anchor
            href="https://xkcd.com/936/"
            label="Relevant xkcd"
            rel="noopener noreferrer"
            target="_blank"
          />
          .
        </Paragraph>

        <Heading level={3} margin="none">
          Attributions
        </Heading>
        <Paragraph fill>
          Icon made by{" "}
          <Anchor
            href="https://www.flaticon.com/authors/freepik"
            rel="noopener noreferrer"
            target="_blank"
          >
            Freepik
          </Anchor>{" "}
          from{" "}
          <Anchor
            href="https://www.flaticon.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Flaticon
          </Anchor>
        </Paragraph>
      </Box>
    </Layer>
  );
};
