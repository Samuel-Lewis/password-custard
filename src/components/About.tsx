import { Anchor, Box, Button, Heading, Layer, Paragraph } from "grommet";
import { Close } from "grommet-icons";
import React from "react";

type AboutPanelProps = {
  onClose: () => void;
};

export const AboutPanel: React.FunctionComponent<AboutPanelProps> = (props) => {
  const { onClose } = props;
  return (
    <Layer position="center" onEsc={onClose} onClickOutside={onClose}>
      <Box pad="medium" gap="small" width="large">
        <Box flex={false} direction="row" justify="between">
          <Heading level={2} margin="none">
            About
          </Heading>
          <Button icon={<Close />} onClick={onClose} />
        </Box>
        <Paragraph fill>
          Password Custard is a lightweight, client side only, password
          generator. It draws on long form phrases, for increased security and
          human consumability (eg, you can kinda remember it and reproduce it).{" "}
          <Anchor href="https://xkcd.com/936/" label="Relevant xkcd" />.
        </Paragraph>
        <Heading level={4} margin="none">
          Attributions
        </Heading>

        <Paragraph fill>
          Icon made by{" "}
          <Anchor href="https://www.flaticon.com/authors/freepik">
            Freepik
          </Anchor>{" "}
          from <Anchor href="https://www.flaticon.com/">Flaticon</Anchor>.
        </Paragraph>
      </Box>
    </Layer>
  );
};
