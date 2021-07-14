import * as React from "react";
import Box from "components/Box";
import { Link } from "components/Link";
import Navbar2 from "components/Navbar2";
import { Credentials } from "data/Credentials";
import * as Text from "components/Text";
import Wave from "components/SVG/Wave";
import { colors } from "styles";
import GetHashParams1 from "components/hasher";


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
            R Word Remover
          </Text.Heading>

          {/* <Box
          // hidden={this.loggedIn ? true : false}
          > */}
          <Text.SectionSubheader color="white">
            Log into spotify and find songs in your playlist that contain the r
            word.
          </Text.SectionSubheader>
          <Link
            mt="16px"
            buttonStyle="primary"
            href="http://localhost:8888"
            // onClick={this.handleButtonClick}
          >
            Sign into Spotify
          </Link>
          <GetHashParams1></GetHashParams1>
          {/* </Box> */}
          {/* <Box
          hidden={this.loggedIn ? false : true}
          >
            <Text.SectionSubheader>Now playing:</Text.SectionSubheader>
          </Box> */}
        </Box>

        <Box mt={5} pt={3} borderTop={`1px solid ${colors.textGray}`}>
          <Text.Body color="gray" mb={2}>
            Speak up, Speak now is an intitative that empowers the people to
            hold their city officials accountable. Want to contribute? Want to
            get involved? Please let us know{" "}
            <Link href="/getinvolved">here</Link>.
          </Text.Body>
        </Box>
      </Box>
      <Wave></Wave>
    </Box>
  );
};
export default Resources;
