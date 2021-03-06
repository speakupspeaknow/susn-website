import { css } from "@emotion/react";
import React from "react";

import { Body } from "components/Text";
import Box from "components/Box";
import * as SVG from "components/SVG";
import { colors } from "styles";

export default {
  title: "SVG",
  component: SVG,
  excludeStories: /.*Data$/,
};

export const AllIcons = () => {
  return (
    <Box
      py={3}
      px={4}
      css={css`
        background: ${colors.primaryTeal};
      `}
    >
      <table
        css={css`
          svg {
            width: 100px;
            max-height: 50px;
          }
          * {
            text-align: left;
          }
        `}
      >
        <thead>
          <th>
            <Body fontWeight="bold" color="white">
              Name
            </Body>
          </th>
          <th>
            <Body fontWeight="bold" color="white">
              Icon
            </Body>
          </th>
        </thead>
        {Object.keys(SVG)
          .sort()
          .map((key) => {
            const Component = SVG[key as keyof typeof SVG];
            return (
              <tr>
                <td>
                  <Body color="white">{key}</Body>
                </td>
                <td>
                  <Component color="white" />
                </td>
              </tr>
            );
          })}
      </table>
    </Box>
  );
};
