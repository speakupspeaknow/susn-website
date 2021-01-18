import { css } from "@emotion/react";
import * as React from "react";
import Select from "react-select";
import Box from "components/Box";
import * as Form from "components/Form";
import { Link } from "components/Link";
import Navbar2 from "components/Navbar2";
import * as Text from "components/Text";
import { cityToEmails, getEmailsForCity } from "data/cityData";
import * as emailData from "data/email";
import { colors, typography } from "styles";
import { makeMailToLink } from "utils/mailto";
import Wave from "components/SVG/Wave";
import { baseButtonStyles, styleVariants } from "styles/components/buttonlike";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { useAnalytics } from "use-analytics";
import Button from "components/Button";
import Modal from "components/Modal";
import theme from "styles/theme";
import copy from "copy-to-clipboard";

interface CityOption {
  value: string;
  label: string;
}

const cityOptions = Object.keys(cityToEmails).map((cityName) => ({
  value: cityName,
  label: cityName,
}));

const LandingPage = () => {
  const [selectedCity, setSelectedCity] = React.useState<CityOption | null>(null);
  const [personName, setPersonName] = React.useState<string>("");

  const handleCityChange = React.useCallback(
    (selectedOption: any) => {
      setSelectedCity(selectedOption);
    },
    [setSelectedCity],
  );

  const handleNameChange = React.useCallback(
    (event: React.SyntheticEvent<any>) => {
      setPersonName(event?.currentTarget.value);
    },
    [setPersonName],
  );

  const [showPreview, setShowPreview] = React.useState<boolean>(false);

  const { track } = useAnalytics();

  const emails = selectedCity !== null ? getEmailsForCity(selectedCity.value) : [];

  const socialMediaMessage = (platform: string) =>
    `I just sent a pre-drafted email to my ${
      selectedCity?.value
    } officials demanding that they restructure their budget to defund police and increase investment in our community instead. I did so in less than a minute thanks to ${
      platform === "twitter" ? "@spkup_spknow" : "Speak Up Speak Now"
    }! Check it out at${platform === "facebook" ? ":" : ""}`;

  const emailBody =
    selectedCity !== null
      ? emailData.makeBody({
          name: personName,
          city: selectedCity.label,
        })
      : "";

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
      position="relative"
      zIndex={0}
    >
      <Navbar2 />

      <Box
        position="relative"
        zIndex={0}
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
            Let's hold police and elected officials accountable.
          </Text.Heading>

          <Text.Body color="white" mb={3}>
            It is unacceptable that for many cities, <strong>1/3</strong> to <strong>1/2</strong> of
            the budget is allotted to the police when communities are in need of social safety nets,
            now more than ever. We <strong>MUST</strong> hold our democratically elected
            representatives accountable and ensure that they have our best interests at heart. One
            way we can do that is by sending them emails demanding that they re-structure the
            budget: cutting funding for police departments in favor of important civic measures.
          </Text.Body>

          <Text.Body color="white" mb={3}>
            All you need to do is select your city and enter your name below for a pre-drafted email
            to send to your city’s officials. NOTE: We add a randomized Email ID in the subject and
            body of the email to help beat email filters.
          </Text.Body>

          <Text.SectionSubheader color="white">I live in</Text.SectionSubheader>
          <Select
            css={css(typography.textStyles.body)}
            value={selectedCity}
            onChange={handleCityChange}
            options={cityOptions}
          />

          {selectedCity && (
            <Box mt={3} display="flex" flexDirection="column" alignItems="stretch">
              <Text.SectionSubheader color="white">my name is</Text.SectionSubheader>
              <Form.Input py={2} name="name" value={personName} onChange={handleNameChange} />
            </Box>
          )}

          {personName && selectedCity && (
            <Box mt={3} display="flex" flexDirection="column" alignItems="stretch">
              <Text.SectionSubheader color="white">
                and I've had enough. It's time to demand change.
              </Text.SectionSubheader>
              <Box mt={4}>
                <Box
                  display="flex"
                  css={css`
                    & > *:not(:last-child) {
                      margin-right: 10px;
                    }
                  `}
                >
                  <Button
                    onClick={() => {
                      setShowPreview(true);
                      track("Preview Email", {
                        name: personName,
                        city: selectedCity,
                      });
                    }}
                  >
                    Preview Email
                  </Button>
                  <Link
                    onClick={() => {
                      track("Send Email", {
                        name: personName,
                        city: selectedCity,
                        emailsSent: emails,
                        emailCount: emails.length,
                      });
                    }}
                    target="_blank"
                    buttonStyle="primary"
                    href={makeMailToLink({
                      to: emails,
                      subject: emailData.subject,
                      body: emailBody,
                    })}
                  >
                    Send email to {selectedCity.label} officials
                  </Link>
                </Box>
              </Box>
              <Box mt={4}>
                <Box
                  display="flex"
                  css={css`
                    & > *:not(:last-child) {
                      margin-right: 10px;
                    }
                  `}
                >
                  <FacebookShareButton
                    onClick={() => {
                      track("Share Facebook", {
                        name: personName,
                        city: selectedCity,
                      });
                    }}
                    quote={socialMediaMessage("facebook")}
                    style={{
                      outline: "none",
                      ...baseButtonStyles,
                      ...styleVariants.shareFacebook,
                    }}
                    url="https://www.speakupspeaknow.org"
                  >
                    Share on Facebook
                  </FacebookShareButton>
                  <TwitterShareButton
                    onClick={() => {
                      track("Share Twitter", {
                        name: personName,
                        city: selectedCity,
                      });
                    }}
                    style={{
                      outline: "none",
                      ...baseButtonStyles,
                      ...styleVariants.shareTwitter,
                    }}
                    title={socialMediaMessage("twitter")}
                    url="https://www.speakupspeaknow.org"
                  >
                    Share on Twitter
                  </TwitterShareButton>
                </Box>
              </Box>
            </Box>
          )}

          <Box mt={5} pt={3} borderTop={`1px solid ${colors.textGray}`}>
            <Text.Body color="textMediumGray" mb={2}>
              <Link href="/hp">Speak up, Speak now</Link> is an initiative that empowers the people
              to hold their city officials accountable. Thanks to the help of a LOT of people, we've
              collected the contact information of city officials from all over the US (
              {cityOptions.length} cities and counting). Want to get involved? Please let us know{" "}
              <Link
                href="/getinvolved"
                onClick={() => {
                  track("Wants to Contribute", {
                    name: personName,
                    city: selectedCity,
                  });
                }}
              >
                here
              </Link>
              .
            </Text.Body>

            <Text.Body color="textMediumGray">
              If your city doesn't have the contact info of your city officials inputted yet, please
              let us know{" "}
              <Link
                href="/newcityrequest"
                onClick={() => {
                  track("Wants New City Added", {
                    name: personName,
                    city: selectedCity,
                  });
                }}
              >
                here
              </Link>
              .
            </Text.Body>
            {selectedCity && (
              <Modal
                allowCloseWithOutsideClick={false}
                bg="transparent"
                isOpen={showPreview}
                onClose={() => setShowPreview(false)}
              >
                <Text.SectionSubheader color="textMediumGray">
                  {emailBody.split("\n").map((line: string) => {
                    return (
                      <Text.Body color="textMediumGray">
                        {line}
                        <br />
                      </Text.Body>
                    );
                  })}
                </Text.SectionSubheader>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  css={css`
                    & > *:not(:last-child) {
                      margin-right: 5px;
                    }
                  `}
                >
                  <Button
                    onClick={() => {
                      copy(emails.join(","));
                    }}
                    color={theme.colors.facebookBlue}
                  >
                    Copy Email Addresses
                  </Button>
                  <Button
                    onClick={() => {
                      copy(emailBody);
                    }}
                    color={theme.colors.facebookBlue}
                  >
                    Copy Email
                  </Button>
                </Box>
              </Modal>
            )}
          </Box>
        </Box>
      </Box>
      <Wave />
    </Box>
  );
};

export default LandingPage;
