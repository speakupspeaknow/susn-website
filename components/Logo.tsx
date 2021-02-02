import * as React from "react";
import Image from "components/Image";

interface Props extends React.ComponentProps<typeof Image> {}

const Logo = (props: Props) => <Image {...props} src="/images/logo.png" />;

Logo.defaultProps = {
  width: "60px",
  height: "60px",
};

export default Logo;
