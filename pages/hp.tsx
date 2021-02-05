import { css } from "@emotion/core";
import * as React from "react";
import Select from "react-select";
import Box from "components/Box";
import Navbar2 from "components/Navbar2";
import * as Text from "components/Text";
import { Link } from "components/Link";
import { colors, typography } from "styles";

import Wave from "components/SVG/Wave";

import { baseButtonStyles, styleVariants } from "styles/components/buttonlike";
import { useBreakpoint } from "styles/breakpoints";

const HomePage = () => {
  const isDesktop = useBreakpoint("md");
  return (
    <Box
      minHeight="100vh"
      width="100%"
      overflowX="hidden"
      bg="black"
      py={0}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <Navbar2 />
      <Box
        container={{
          _: { maxWidth: "90%" },
          lg: { maxWidth: "50em" },
        }}
      >
        <Box
          width="100%"
          pt={{ _: 2, md: 2 }}
          pb={{ _: 3, md: 4 }}
          display="flex"
          flexDirection="column"
          css={css`
            color: white;
            text-align: center;
            align-items: center;
          `}
        >
          <Text.SectionHeader
            text-a="s"
            color="white"
            text-align="center"
            fontWeight={700}
            mb={3}
          >
            Speak Intitative
          </Text.SectionHeader>
          <Box>
            <div>
              <video
                src="./SUSNhpv.mp4"
                controls
                height={isDesktop ? 350 : 240}
                width={isDesktop ? 700 : 320}
              >
                Video not supported
              </video>
            </div>
          </Box>

          <Box mt={5} pt={3} borderTop={`1px solid ${colors.textGray}`}>
            <Text.Body color="gray" mb={2}>
              <Link href="/hp">Speak up, Speak now</Link> is an intitative that
              empowers the people to hold their city officials accountable. Want
              to contribute? Want to get involved? Please let us know{" "}
              <Link href="/getinvolved">here</Link>.
            </Text.Body>
          </Box>
        </Box>
      </Box>
      <Wave />
    </Box>
  );
};

export default HomePage;
