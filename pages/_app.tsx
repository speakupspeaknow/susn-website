import "styles/css/citybudgets.css";
import "styles/css/cityreps.css";

import Head from "next/head";
import { css, Global } from "@emotion/react";
import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";
import { AnalyticsProvider } from "use-analytics";

const analytics = Analytics({
  app: "speak-up-speak-now",
  plugins: [
    googleAnalytics({
      trackingId: "UA-89695975-8",
    }),
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }

          *,
          *:after,
          *:before {
            box-sizing: border-box;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          h7,
          p {
            margin: 0;
          }
        `}
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>

      <AnalyticsProvider instance={analytics}>
        <Component {...pageProps} />
      </AnalyticsProvider>
    </>
  );
}

export default MyApp;
