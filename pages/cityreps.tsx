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
import { AlamedaObjects } from "data/AlamedaObjects.js";
import { cityDataObjects } from "data/cityDataObjects";
import { cDM } from "data/cDM.js";
import { useBreakpoint } from "styles/breakpoints";
import curriedMix from "polished/lib/color/mix";
// import { useAnalytics } from 'use-analytics'

// interface CityOption {     //old cityOption interface
//   value: string
//   label: string
// }

interface CityOption {
  value: keyof typeof cDM;
  label: string;
  post: any;
  name: any;
  email: any;
}
// declare module 'react' {
//     interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//         // extends React's HTMLAttributes
//         class?: string
//     }
// }

// const { track } = useAnalytics()
// for each city in the cDM, and for each person/object in that city get the
// value, label, post, name, email

const cityOptions = Object.keys(cDM).map((cityName) => ({
  value: cityName,
  label: cityName,
}));

// const cityOfficials = ck.map((city) => {
//     const cityData = cDM[city]
//     // cDM[city].map((cityData) => ({
//     // return {
//     //     value: cityData.CS,
//     //     label: cityData.CS,
//     //     post: cityData.Post,
//     //     name: cityData.Name,
//     //     email: cityData.Email,
//     // }
// }
// )

// const cityOptions = cityBudgetObjects.map((budgetData) => ({
//     value: budgetData.cityState,
//     label: budgetData.cityState,
//     policeBudget: budgetData.policeBudget,
//     generalFund: budgetData.generalFund,
//     Population: budgetData.Population,
//     gfMinusPb: budgetData.gfMinusPb
//   }))
// const cityOptions = ck.forEach((city: string) => {

//     cDM[city] = cDM[city].map((cityData) => ({
//         value: cityData.CS,
//         label: cityData.CS,
//         post: cityData.Post,
//         name: cityData.Name,
//         email: cityData.Email,

//     }
//     ))
// })

// const ck = Object.keys(cDM)
// const cityOptions = ck.map((cityData) => ({
//     value: cityData[1],
//     label: cityData[1],
//     post: cityData[2],
//     name: cityData[3],
//     email: cityData[4],
// }))

// const citops = AlamedaObjects[0]

// export const optionCities2 = [
//     "Alameda, CA", "Alhambra, CA", "Anaheim, CA", "Antioch, CA", "Apple Valley, CA", "Atlanta, GA", "Auburn, CA", "Austin, TX", "Bakersfield, CA", "Baldwin Park, CA", "Baltimore, MD", "Bellevue, WA", "Berkeley, CA", "Boston, MA", "Boulder, CO", "Buena Park, CA", "Burbank, CA", "Camarillo, CA", "Cambridge, MA", "Carlsbad, CA", "Carson, CA", "Charlotte, NC", "Chicago, IL", "Chico, CA", "Chino, CA", "Chino Hills, CA", "Chula Vista, CA", "Citrus Heights, CA", "Cleveland, OH", "Clovis, CA", "College Park, MD", "Columbia, MO", "Columbus, OH", "Concord, CA", "Compton, CA", "Corona, CA", "Costa Mesa, CA", "Cupertino, CA", "Dallas, TX", "Daly City, CA", "Davis, CA", "Denver, CO", "Detroit, MI", "Downey, CA", "Dublin, CA", "Emeryville, CA", "Escondido, CA", "Elk Grove, CA", "El Cajon, CA", "El Monte, CA", "Fairfield, CA", "Fontana, CA", "Folsom, CA", "Fremont, CA", "Fresno, CA", "Fullerton, CA", "Garden Grove, CA", "Glendale, CA", "Grand Rapids, MI", "Hawthorne, CA", "Hayward, CA", "Hemet, CA", "Hesperia, CA", "Houston, TX", "Huntington Beach, CA", "Indio, CA", "Indianapolis, IN", "Inglewood, CA", "Irvine, CA", "Jurupa Valley, CA", "Lakewood, CA", "Lake Forest, CA", "Lancaster, CA", "Larkspur, CA", "Livermore, CA", "Lincoln, NE", "Los Altos, CA", "Los Angeles, CA", "Long Beach, CA", "Louisville, KY", "Lynwood, CA", "Manchester, NH", "Manteca, CA", "Memphis, TN", "Menifee, CA", "Menlo Park, CA", "Merced, CA", "Miami, FL", "Mill Valley, CA", "Milpitas, CA", "Milwaukee, WI", "Mission Viejo, CA", "Modesto, CA", "Moreno Valley, CA", "Mountain View, CA", "Murrieta, CA", "Napa, CA", "Nashua, NH", "Nashville, TN", "Newark, NJ", "Newport Beach, CA", "New York, NY", "Norwalk, CA", "Oakland, CA", "Oceanside, CA", "Oklahoma City, OK", "Omaha, NE", "Ontario, CA", "Orange, CA", "Orlando, FL", "Oxnard, CA", "Palmdale, CA", "Palo Alto, CA", "Pasadena, CA", "Perris, CA", "Placentia, CA", "Pleasanton, CA", "Pittsburgh, PA", "Philadelphia, PA", "Phoenix, AZ", "Pomona, CA", "Porterville, CA", "Portland, OR", "Raleigh, NC", "Rancho Cordova, CA", "Rancho Cucamonga, CA", "Redding, CA", "Redlands, CA", "Redondo Beach, CA", "Redwood City, CA", "Reno, NV", "Rialto, CA", "Richmond, CA", "Riverside, CA", "Roseville, CA", "Sacramento, CA", "Salinas, CA", "Salt Lake City, UT", "San Antonio, TX", "San Bernardino, CA", "San Dimas, CA", "San Diego, CA", "San Francisco, CA", "San Jose, CA", "San Leandro, CA", "San Marcos, CA", "San Mateo, CA", "San Ramon, CA", "Santa Ana, CA", "Santa Barbara, CA", "Santa Clara, CA", "Santa Clarita, CA", "Santa Cruz, CA", "Santa Maria, CA", "Santa Monica, CA", "Santa Rosa, CA", "Seattle, WA", "Simi Valley, CA", "South Gate, CA", "Springfield, MA", "Stockton, CA", "St. Paul, MN", "Sunnyvale, CA", "Temecula, CA", "Thousand Oaks, CA", "Torrance, CA", "Tracy, CA", "Tucson, AZ", "Tulsa, OK", "Tustin, CA", "Turlock, CA", "Upland, CA", "Union City, CA", "Vacaville, CA", "Vallejo, CA", "Ventura, CA", "Victorville, CA", "Visalia, CA", "Vista, CA", "Washington DC", "West Covina, CA", "Walnut Creek, CA", "Westminster, CA", "Whittier, CA", "Yuba City, CA"
// ].map((cityName) => ({
//     value: cityName,
//     label: cityName,
// }))

const CityReps = () => {
  const isDesktop = useBreakpoint("md");
  const [selectedCity, setSelectedCity] = React.useState<CityOption | null>(
    null
  );

  const handleCityChange = React.useCallback(
    (selectedOption: any) => {
      setSelectedCity(selectedOption);
    },
    [setSelectedCity]
  );
  // Anaheim, CA => anaheim-ca.png
  const cityPath = selectedCity?.value // "Anaheim, CA"
    .toLowerCase() // "anaheim, ca"
    .split(",") // ["anaheim", " ca"]
    .map((s) => s.trim()) //["anaheim" ,"ca"]
    .join("-"); // "anaheim-ca"

  const cityName = selectedCity?.value.split(",").shift();
  const cityOfficials = selectedCity?.value
    ? cDM[selectedCity.value].map((cityData) => ({
        post: cityData.Post,
        name: cityData.Name,
        email: cityData.Email,
      }))
    : [];

  const socialMediaMessage = (platform: string) =>
    `Found ${cityName}'s city officials thanks to ${
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
          zIndex={0}
        >
          <Text.Heading text-a="s" color="white" fontWeight={700} mb={3}>
            Find your city officials
          </Text.Heading>

          <Text.SectionSubheader color="white" mb={3}>
            Select your city below to see your local public servants
          </Text.SectionSubheader>

          <Select
            css={css(typography.textStyles.body)}
            value={selectedCity}
            options={cityOptions}
            className="mb-4"
            placeholder="Select City"
            isSearchable
            onChange={handleCityChange}
            zIndex={0}
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
              <Text.SectionHeader color="white">
                {selectedCity.label}{" "}
              </Text.SectionHeader>
              <Box>
                <Box id="grid-container1">
                  <Text.Body id="a-a" color="white" mb={3}>
                    <strong>Title</strong>
                  </Text.Body>
                  <Text.Body id="a-b" color="white" mb={3}>
                    <strong>Name </strong>
                  </Text.Body>
                  <Text.Body id="a-c" color="white" mb={3}>
                    <strong>Email </strong>
                  </Text.Body>
                </Box>

                {cityOfficials.map((item) => (
                  <Box id="grid-container2">
                    <Text.Body className="grid-item" color="white" mb={3}>
                      {item.post}
                    </Text.Body>

                    <Text.Body className="grid-item" color="white" mb={3}>
                      {item.name}
                    </Text.Body>
                    <Text.Body className="grid-item" color="white" mb={3}>
                      {item.email}
                    </Text.Body>
                  </Box>
                ))}

                <Box
                  mt={4}
                  css={css`
                    color: white;
                    text-align: center;
                  `}
                >
                  <Box
                    display="flex"
                    css={css`
                      & > *:not(:last-child) {
                        margin-right: 10px;
                      }
                    `}
                  >
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
                      url="https://www.speakupspeaknow.org/cityreps"
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
                      url="https://www.speakupspeaknow.org/cityreps"
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

export default CityReps;
