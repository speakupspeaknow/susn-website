import * as React from "react";
import { css } from "@emotion/react";
import { rgba } from "polished";

import Box from "components/Box";
import { ExternalLink, InternalLink } from "components/Link";
import Logo from "components/Logo";
import * as Text from "components/Text";
import * as SVG from "components/SVG";
import { colors } from "styles";
import { readableColor } from "polished";
import Icon from "components/Icon";

interface Props {}

const buttonStyles = css`
  padding: 
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    height: 1em;
    margin-right: 5px;
  }
`;

const navItems = [
  {
    name: "Defund Police",
    path: "/",
  },
  {
    name: "Community Investment",
    path: "/cb2",
  },
  {
    name: "Resources",
    path: "/resources",
  },
];

// class NavbarClass extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       menuOpen: false,
//       foo: 'bar',
//       a: 1,
//       b: 2,
//     }
//   }

//   onHamburgerClick() {
//     this.setState({
//       menuOpen: true,
//       a: 2,
//     })
//   }

//   render() {
//     this.state.menuOpen
//   }
// }

////////////////////////////////

const bp = "md";

const Navbar3 = (props: Props) => {
  // const foo = React.useState(false)
  // const menuOpen = foo[0]
  // const setMenuOpen = foo[1]

  const [menuOpen, setMenuOpen] = React.useState(false);
  console.log(menuOpen);
  return (
    <Box
      // bg="black"
      // width="100%"
      // display="grid"
      // gridTemplateColumns="auto 1fr auto"
      // css={css({
      //     alignItems: 'center',
      // })}
      // gridColumnGap={4}
      // p={3}
      // height="100px"
      p={35}
      bg="transparent"
      width="100%"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Logo
          css={css`
            height: 100%;
          `}
        />
      </Box>

      {/* Nav menu items */}
      <Box
        display={{ _: "grid", [bp]: "flex" }}
        css={css`
          & > *:not(:last-child) {
            margin-right: 10px;
          }
        `}
        justifyContent="space-between"
        width="70%"
      >
        {navItems.map((item) => (
          <Box borderBottom={`2px solid ${colors.primaryTeal}`}>
            <InternalLink noUnderline to={item.path}>
              <Text.SectionSubheader color="white">{item.name}</Text.SectionSubheader>
            </InternalLink>
          </Box>
        ))}
      </Box>

      <Box
        placeSelf="center end"
        display="flex"
        flexDirection="row"
        border="2px solid red"
        css={css`
          cursor: pointer;
          & > * {
            margin-left: 8px;
          }
        `}
      >
        <ExternalLink href="https://www.instagram.com/speakup_speaknow">
          <Icon icon="instagram" size={1} color={colors.primaryTeal} />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/spkup_spknow">
          <Icon icon="twitter" color={colors.primaryTeal} />
        </ExternalLink>

        <Box
          display={{ _: "none", [bp]: "none" }}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <img src={"./hamburgerMenu.png"} />
        </Box>
      </Box>

      <Box
        display={menuOpen ? "flex" : "none"}
        position="fixed"
        top="109px"
        right="0"
        height="calc(100vh - 100px)"
        width="100vw"
        bg={`${rgba(colors.textGray, 0.5)}`}
      >
        <Box
          display="flex"
          position="absolute"
          height="100%"
          top="0"
          right="0"
          width="70%"
          bg="black"
          flexDirection="column"
          alignItems="start"
          p="24px"
        >
          {navItems.map((item) => (
            <InternalLink href={item.path}>
              <Text.SectionSubheader color="white">{item.name}</Text.SectionSubheader>
            </InternalLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar3;
