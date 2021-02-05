import { mq } from "styles/breakpoints";
import colors from "../colors";
import typography from "../typography";
const { textStyles } = typography;

// Defining button styles centrally here since both <a /> and <button /> will consume them

export const baseButtonStyles = {
  padding: "8px 16px",
  borderRadius: "6px",
  fontFamily: textStyles.body.fontFamily,
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
  textAlign: "center",
} as const;

export const styleVariants = {
  primary: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: colors.primaryTeal,
    borderColor: colors.primaryTeal,
    color: colors.bgBeige,
  },
  primaryOutline: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderColor: colors.primaryTeal,
    color: colors.primaryTeal,
  },

  secondary: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: colors.secondaryTeal,
    borderColor: colors.secondaryTeal,
    color: colors.bgBeige,
  },
  secondaryOutline: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderColor: colors.secondaryTeal,
    color: colors.secondaryTeal,
  },

  success: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: colors.validGreen,
    borderColor: colors.validGreen,
    color: colors.bgBeige,
  },
  successOutline: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderColor: colors.validGreen,
    color: colors.validGreen,
  },

  warning: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: colors.primaryGold,
    borderColor: colors.primaryGold,
    color: colors.bgBeige,
  },
  warningOutline: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderColor: colors.primaryGold,
    color: colors.primaryGold,
  },

  danger: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: colors.terraCotta,
    borderColor: colors.terraCotta,
    color: colors.bgBeige,
  },
  dangerOutline: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderColor: colors.terraCotta,
    color: colors.terraCotta,
  },

  light: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: colors.bgBeige,
    borderColor: colors.bgBeige,
    color: colors.textGray,
  },
  lightOutline: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderColor: colors.bgBeige,
    color: colors.bgBeige,
  },

  shareFacebook: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: colors.facebookBlue,
    borderColor: colors.facebookBlue,
    color: colors.bgBeige,
    fontSize: "12px",
  },
  shareTwitter: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: colors.twitterBlue,
    borderColor: colors.twitterBlue,
    color: colors.bgBeige,
    fontSize: "12px",
  },

  plainButLightOnHover: {
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: colors.primaryTeal,
    boxShadow: "none",
    transition:
      "0.3s ease background-color, 0.3s ease border-color, 0.3s ease color, 0.3s ease boxShadow",
    "&:hover": {
      backgroundColor: colors.bgBeige,
      borderColor: colors.bgBeige,
      color: colors.primaryTeal,
      boxShadow: baseButtonStyles.boxShadow,
    },
  },

  plain: {
    color: colors.textGray,
    boxShadow: "none",
    borderRadius: 0,
    border: "none",
  },
  unstyled: {},
} as const;

export const widthVariants = {
  full: {
    width: "100%",
  },
  auto: {},
};

export const sizeVariants = {
  big: {
    fontSize: "16px",
    [mq.md]: {
      fontSize: "20px",
    },
    borderRadius: "2em",
    paddingTop: "13px",
    paddingBottom: "13px",
  },
  normal: {
    paddingTop: "9.5px",
    paddingBottom: "9.5px",
    fontSize: "14px",
    borderRadius: "8px",
  },
};
