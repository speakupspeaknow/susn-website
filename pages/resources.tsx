import * as React from "react";
import Box from "components/Box";
import { Link } from "components/Link";
import Navbar2 from "components/Navbar2";

import * as Text from "components/Text";
import Wave from "components/SVG/Wave";
import { colors } from "styles";

const Resources = () => {
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
        >
          <Text.Heading color="white" fontWeight={700} mb={3}>
            Coming soon.
          </Text.Heading>
        </Box>
        <Box mt={5} pt={3} borderTop={`1px solid ${colors.textGray}`}>
          <Text.Body color="gray" mb={2}>
            Speak up, Speak now is an intitative that empowers the people to hold their city
            officials accountable. Want to contribute? Want to get involved? Please let us know{" "}
            <Link href="/getinvolved">here</Link>.
          </Text.Body>
        </Box>
      </Box>
      <Wave></Wave>
    </Box>
  );
};
export default Resources;
