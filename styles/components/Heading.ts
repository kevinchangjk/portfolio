import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  variants: {
    primary: {
      fontSize: ["24px", null, "32px", null, "48px", "56px"],
      fontWeight: "bold",
      textAlign: "justify",
      letterSpacing: ["normal", null, "wide"],
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
    secondary: {
      fontSize: ["16px", null, "24px", null, "32px", "48px"],
      fontWeight: "semibold",
      textAlign: "justify",
      letterSpacing: "normal",
      _light: {
        color: "gray.3",
      },
      _dark: {
        color: "gray.4",
      },
    },
    card: {
      fontSize: ["14px", null, "20px", null, "28px", "36px"],
      fontWeight: "semibold",
      letterSpacing: ["normal", null, null, "wide"],
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
    subPrimary: {
      fontSize: ["20px", null, "28px", null, "42px", "48px"],
      fontWeight: "semibold",
      letterSpacing: ["normal", null, "wide"],
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
  },
});
