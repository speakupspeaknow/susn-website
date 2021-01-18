import { css } from "@emotion/react";
import * as React from "react";
import Box from "components/Box";
import Icon from "components/Icon";
import { InternalLink, ExternalLink } from "components/Link";
import Logo from "components/Logo";
import { colors } from "styles";
import * as Text from "components/Text";
import { rgba } from "polished";

interface Props {}

const bp = "md";

const Navbar = (props: Props) => (
  <Box
    p={35}
    bg="transparent"
    width="100%"
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Box
      p={35}
      bg="transparent"
      width="100%"
      display={{ _: "grid", [bp]: "flex" }}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <InternalLink href="/">
        <Logo />
      </InternalLink>
      <Box borderBottom={`2px solid ${colors.primaryTeal}`}>
        <InternalLink href="/" noUnderline>
          <Text.SectionSubheader color="white">Defund Police</Text.SectionSubheader>
        </InternalLink>
      </Box>
      <Box borderBottom={`2px solid ${colors.primaryTeal}`}>
        <InternalLink href="/cb2" noUnderline>
          <Text.SectionSubheader color="white">Community Investment</Text.SectionSubheader>
        </InternalLink>
      </Box>
      <Box borderBottom={`2px solid ${colors.primaryTeal}`}>
        <InternalLink href="/resources" noUnderline>
          <Text.SectionSubheader color="white">Resources</Text.SectionSubheader>
        </InternalLink>
      </Box>
    </Box>

    <Box
      display="flex"
      css={css`
        & > *:not(:last-child) {
          margin-right: 10px;
        }
      `}
    >
      <ExternalLink href="https://www.instagram.com/speakup_speaknow">
        <Icon icon="instagram" size={1} color={colors.primaryTeal} />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/spkup_spknow">
        <Icon icon="twitter" color={colors.primaryTeal} />
      </ExternalLink>
    </Box>
  </Box>
);

export default Navbar;
