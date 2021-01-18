import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "css.gg/icons/css/instagram.css";
import "css.gg/icons/css/twitter.css";
import * as React from "react";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from "styled-system";

type IconProps = SpaceProps &
  PositionProps &
  ColorProps &
  BorderProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  ShadowProps;

const Icon = styled<"i", IconProps>("i")(
  space,
  position,
  color,
  border,
  layout,
  flexbox,
  grid,
  shadow,
);

type AvailableIcon = "instagram" | "twitter";

type IconComponentProps = IconProps & {
  icon: AvailableIcon;
  size?: number;
  color?: string;
};

const IconComponent = ({ icon, color, size }: IconComponentProps) => (
  <Icon
    css={css`
      ${size ? `--ggs: ${size};` : ""}
      ${color ? `color: ${color};` : ""}
    `}
    className={`gg-${icon}`}
  />
);

export default IconComponent;
