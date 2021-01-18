import { css } from "@emotion/core";
import * as React from "react";
import Select from "react-select";
import Box from "components/Box";
import Navbar2 from "components/Navbar2";
import * as Text from "components/Text";
import { Link } from "components/Link";
import { colors, typography } from "styles";
import Image from "components/Image";
import Wave from "components/SVG/Wave";
import Button from "components/Button";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { baseButtonStyles, styleVariants } from "styles/components/buttonlike";

import { cityBudgetObjects } from "data/cityBudgetObjects";
import Graph from "components/Graph";
// import { useAnalytics } from 'use-analytics'

// interface CityOption {     //old cityOption interface
//   value: string
//   label: string
// }

interface CityOption {
  value: string;
  label: string;

  policeBudget: any;
  generalFund: any;
  Population: any;
  gfMinusPb: any;
}
// const { track } = useAnalytics()
const cityOptions = cityBudgetObjects.map((budgetData) => ({
  value: budgetData.cityState,
  label: budgetData.cityState,
  policeBudget: budgetData.policeBudget,
  generalFund: budgetData.generalFund,
  Population: budgetData.Population,
  gfMinusPb: budgetData.gfMinusPb,
}));

export const optionCities2 = [
  "Alameda, CA",
  "Alhambra, CA",
  "Anaheim, CA",
  "Antioch, CA",
  "Apple Valley, CA",
  "Atlanta, GA",
  "Auburn, CA",
  "Austin, TX",
  "Bakersfield, CA",
  "Baldwin Park, CA",
  "Baltimore, MD",
  "Bellevue, WA",
  "Berkeley, CA",
  "Boston, MA",
  "Boulder, CO",
  "Buena Park, CA",
  "Burbank, CA",
  "Camarillo, CA",
  "Cambridge, MA",
  "Carlsbad, CA",
  "Carson, CA",
  "Charlotte, NC",
  "Chicago, IL",
  "Chico, CA",
  "Chino Hills, CA",
  "Chino, CA",
  "Chula Vista, CA",
  "Citrus Heights, CA",
  "Cleveland, OH",
  "Clovis, CA",
  "Columbia, MO",
  "Columbus, OH",
  "Compton, CA",
  "Concord, CA",
  "Corona, CA",
  "Costa Mesa, CA",
  "Cupertino, CA",
  "Dallas, TX",
  "Daly City, CA",
  "Davis, CA",
  "Denver, CO",
  "Detroit, MI",
  "Downey, CA",
  "Dublin, CA",
  "El Cajon, CA",
  "El Monte, CA",
  "Elk Grove, CA",
  "Escondido, CA",
  "Fairfield, CA",
  "Folsom, CA",
  "Fontana, CA",
  "Fremont, CA",
  "Fresno, CA",
  "Fullerton, CA",
  "Garden Grove, CA",
  "Glendale, CA",
  "Grand Rapids, MI",
  "Hawthorne, CA",
  "Hayward, CA",
  "Hemet, CA",
  "Hesperia, CA",
  "Houston, TX",
  "Huntington Beach, CA",
  "Indianapolis, IN",
  "Indio, CA",
  "Inglewood, CA",
  "Irvine, CA",
  "Jurupa Valley, CA",
  "Lake Forest, CA",
  "Lakewood, CA",
  "Lancaster, CA",
  "Larkspur, CA",
  "Lincoln, NH",
  "Livermore, CA",
  "Long Beach, CA",
  "Los Altos, CA",
  "Los Angeles, CA",
  "Louisville, KY",
  "Lynwood, CA",
  "Manchester, NH",
  "Manteca, CA",
  "Memphis, TN",
  "Menifee, CA",
  "Merced, CA",
  "Miami, FL",
  "Milpitas, CA",
  "Milwaukee, WI",
  "Mission Viejo, CA",
  "Modesto, CA",
  "Moreno Valley, CA",
  "Mountain View, CA",
  "Murrieta, CA",
  "Napa, CA",
  "Nashua, NH",
  "Nashville, TN",
  "New York, NY",
  "Newark, NJ",
  "Newport Beach, CA",
  "Norwalk, CA",
  "Oakland, CA",
  "Oceanside, CA",
  "Oklahoma City, OK",
  "Omaha, NE",
  "Ontario, CA",
  "Orange, CA",
  "Orlando, FL",
  "Oxnard, CA",
  "Palmdale, CA",
  "Pasadena, CA",
  "Perris, CA",
  "Philadelphia, PA",
  "Phoenix, AZ",
  "Pittsburgh, PA",
  "Placentia, CA",
  "Pleasanton, CA",
  "Pomona, CA",
  "Porterville, CA",
  "Portland, OR",
  "Raleigh, NC",
  "Rancho Cordova, CA",
  "Rancho Cucamonga, CA",
  "Redding, CA",
  "Redlands, CA",
  "Redondo Beach, CA",
  "Redwood City, CA",
  "Reno, NV",
  "Rialto, CA",
  "Richmond, CA",
  "Riverside, CA",
  "Roseville, CA",
  "Sacramento, CA",
  "Salinas, CA",
  "Salt Lake City, UT",
  "San Antonio, TX",
  "San Bernardino, CA",
  "San Diego, CA",
  "San Dimas, CA",
  "San Francisco, CA",
  "San Jose, CA",
  "San Leandro, CA",
  "San Marcos, CA",
  "San Mateo, CA",
  "San Ramon, CA",
  "Santa Ana, CA",
  "Santa Barbara, CA",
  "Santa Clara, CA",
  "Santa Clarita, CA",
  "Santa Cruz, CA",
  "Santa Maria, CA",
  "Santa Monica, CA",
  "Santa Rosa, CA",
  "Seattle, WA",
  "Simi Valley, CA",
  "South Gate, CA",
  "Springfield, MA",
  "Saint Paul, MN",
  "Stockton, CA",
  "Sunnyvale, CA",
  "Temecula, CA",
  "Thousand Oaks, CA",
  "Torrance, CA",
  "Tracy, CA",
  "Tucson, AZ",
  "Tulsa, OK",
  "Turlock, CA",
  "Tustin, CA",
  "Union City, CA",
  "Upland, CA",
  "Vacaville, CA",
  "Vallejo, CA",
  "Ventura, CA",
  "Victorville, CA",
  "Visalia, CA",
  "Vista, CA",
  "Washington, D.C.",
  "West Covina, CA",
  "Westminster, CA",
  "Whittier, CA",
  "Yuba City, CA",
].map((cityName) => ({
  value: cityName,
  label: cityName,
}));

const CityBudget2 = () => {
  const [selectedCity, setSelectedCity] = React.useState<CityOption | null>(null);

  const handleCityChange = React.useCallback(
    (selectedOption: any) => {
      setSelectedCity(selectedOption);
    },
    [setSelectedCity],
  );
  // Anaheim, CA => anaheim-ca.png
  const cityPath = selectedCity?.value // "Anaheim, CA"
    .toLowerCase() // "anaheim, ca"
    .split(",") // ["anaheim", " ca"]
    .map((s) => s.trim()) //["anaheim" ,"ca"]
    .join("-"); // "anaheim-ca"

  const cityName = selectedCity?.value.split(",").shift();

  const socialMediaMessage = (platform: string) =>
    `I was able to see how ${cityName} can divest from police and invest in our community thanks to ${
      platform === "twitter" ? "@spkup_spknow" : "Speak Up Speak Now"
    }! Check it out at${platform === "facebook" ? ":" : ""}`;

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
          <Text.Heading text-a="s" color="white" fontWeight={700} mb={3}>
            Re-imagine your city budget
          </Text.Heading>

          <Text.SectionSubheader color="white" mb={3}>
            Select your city below and see what portion of your city's budget the police take up and
            how it could be re-distributed to benefit your community
          </Text.SectionSubheader>

          <Select
            css={css(typography.textStyles.body)}
            value={selectedCity}
            options={cityOptions}
            className="mb-4"
            placeholder="Select City"
            isSearchable
            onChange={handleCityChange}
          />

          {selectedCity && (
            <Box
              mt={4}
              css={css`
                color: white;
                text-align: center;
              `}
            >
              {" "}
              <Text.SectionHeader color="white">{selectedCity.label} </Text.SectionHeader>
              <Text.Body color="white">
                Police Budget: <strong>${selectedCity.policeBudget.toLocaleString()}</strong>
              </Text.Body>
              <Text.Body color="white">
                General Fund: <strong>${selectedCity.generalFund.toLocaleString()}</strong>
              </Text.Body>
              <Box display={{ _: "none", md: "flex" }}>
                <Graph
                  cx={385}
                  PoliceBudget={selectedCity.policeBudget}
                  GeneralFundRemainder={selectedCity.gfMinusPb}
                />
              </Box>
              <Box display={{ _: "flex", md: "none" }}>
                <Graph
                  cx={210}
                  PoliceBudget={selectedCity.policeBudget}
                  GeneralFundRemainder={selectedCity.gfMinusPb}
                />
              </Box>
              {/* </Box> */}
              <Box>
                <Text.SectionSubheader color="white" mb={3}>
                  This is what it could look like if {cityName} Police Department were defunded by
                  just <strong>50%</strong> and the appropriated funds were alloted like so:
                </Text.SectionSubheader>
                {/* <ul
                  css={css`
              color: white;
              text-align: center;
            `}
                > */}
                <Box id="grid-container">
                  {/* <Box
                    id="a"
                  // display="flex"
                  // // position="absolute"
                  // // height="100%"
                  // // width="70%"
                  // flexDirection="row"
                  // // alignItems="start"
                  // justifyContent="space-between"
                  > */}
                  <Text.Body id="a-a" color="white" mb={3}>
                    <strong>50% to Basic Needs </strong>
                  </Text.Body>
                  <Text.Body id="a-b" color="white" mb={3}>
                    <strong>20% to Public Infrastructure </strong>
                  </Text.Body>
                  <Text.Body id="a-c" color="white" mb={3}>
                    <strong>30% to New Community Safety Measures </strong>
                  </Text.Body>
                  {/* </Box> */}
                  {/* <Box
                    id="b"
                  // display="flex"
                  // // position="absolute"
                  // // height="100%"
                  // // width="70%"
                  // flexDirection="row"
                  // // alignItems="start"
                  // justifyContent="space-between"
                  // width="100%"
                  > */}
                  <img
                    id="b-a"
                    width="40%"
                    alt="Basic Needs Icon: little heart over a house"
                    src={"images/bni.png"}
                  />{" "}
                  <img
                    id="b-b"
                    width="40%"
                    alt="Public Infrastructure Icon: big building "
                    src={"images/pii.png"}
                  />{" "}
                  <img
                    id="b-c"
                    width="40%"
                    alt="New Community Safety Measures Icon: two people facing each other"
                    src={"images/rcsi.png"}
                  />{" "}
                  {/* </Box> */}
                  {/* <Box
                    id="c"
                  // // borderTop="10px"
                  // display="flex"
                  // // position="absolute"
                  // // height="100%"
                  // // width="70%"
                  // flexDirection="row"
                  // alignItems="start"
                  // justifyContent="space-between"

                  > */}
                  <Text.Body id="c-a" color="white" mb={3}>
                    Housing, Food, Healthcare and Career Training
                  </Text.Body>
                  <Text.Body id="c-b" color="white" mb={3}>
                    Transportation, Libraries, and Parks
                  </Text.Body>{" "}
                  <Text.Body id="c-c" color="white" mb={3}>
                    Community and Rehabilitation Oriented Programs{" "}
                  </Text.Body>{" "}
                  {/* </Box> */}
                </Box>

                {/* <div> */}

                {/* </div> */}

                {/* <div> */}

                {/* </div> */}
                {/* </ul> */}

                <Box
                  mt={4}
                  css={css`
                    color: white;
                    text-align: center;
                  `}
                >
                  <Image
                    width="60%"
                    border="5px solid white"
                    src={`images/CityInfographics/${cityPath}.png`}
                  />
                  <Box
                    display="flex"
                    css={css`
                      & > *:not(:last-child) {
                        margin-right: 10px;
                      }
                    `}
                  >
                    <a href={`./CityInfographics/${cityPath}.png`} download>
                      <Button
                      // onClick={() => {
                      //     track('Download Infographic', {

                      //     })
                      // }}
                      >
                        Download
                      </Button>
                    </a>

                    <FacebookShareButton
                      // onClick={() => {
                      //     track('Share Twitter', {

                      //         city: selectedCity
                      //     })
                      // }}
                      quote={socialMediaMessage("facebook")}
                      style={{
                        outline: "none",
                        ...baseButtonStyles,
                        ...styleVariants.shareFacebook,
                      }}
                      url="https://www.speakupspeaknow.org/cb2"
                    >
                      Share on Facebook
                    </FacebookShareButton>
                    <TwitterShareButton
                      // onClick={() => {
                      //     track('Share Twitter', {

                      //         city: selectedCity,
                      //     })
                      // }}
                      style={{
                        outline: "none",
                        ...baseButtonStyles,
                        ...styleVariants.shareTwitter,
                      }}
                      title={socialMediaMessage("twitter")}
                      url="https://www.speakupspeaknow.org/cb2"
                    >
                      Share on Twitter
                    </TwitterShareButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {/* <Text.PageHeader text-a="s" color="white" fontWeight={700} mb={3}>
            Re-imagine your city budget.
          </Text.PageHeader> */}

          <Box mt={5} pt={3} borderTop={`1px solid ${colors.textGray}`}>
            <Text.Body color="gray" mb={2}>
              <Link href="/hp">Speak up, Speak now</Link> is an intitative that empowers the people
              to hold their city officials accountable. Want to contribute? Want to get involved?
              Please let us know <Link href="/getinvolved">here</Link>.
            </Text.Body>
          </Box>
        </Box>
      </Box>
      <Wave />
    </Box>
  );
};

export default CityBudget2;
