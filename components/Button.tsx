import styled from "@emotion/styled";
import { space, SpaceProps, variant } from "styled-system";

import { baseButtonStyles, styleVariants, widthVariants } from "styles/components/buttonlike";
import theme from "styles/theme";

type ButtonProps = {
  variant?: keyof typeof styleVariants;
  width?: keyof typeof widthVariants;
  as?: string;
} & SpaceProps;

const Button = styled("button")<ButtonProps>(
  baseButtonStyles,
  variant({ variants: styleVariants }),
  variant({
    prop: "width",
    variants: widthVariants,
  }),
  space,
);

Button.defaultProps = {
  color: theme.colors.bgBeige,
  variant: "primary",
  width: "auto",
};

export default Button;
export { styleVariants };
