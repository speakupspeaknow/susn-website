import * as React from "react";
import { ReactTypeformEmbed } from "react-typeform-embed";

interface Props {
  url: string;
}
const EmbeddedTypeform = ({ url }: Props) => {
  return (
    <React.Fragment>
      <ReactTypeformEmbed
        popup
        autoOpen
        autoClose={1}
        hideHeaders
        hideFooter
        buttonText="Go!"
        url={url}
      />
    </React.Fragment>
  );
};

export default EmbeddedTypeform;
