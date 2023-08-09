import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
  },
  variants: {
    primary: {
      fontSize: ["24px", null, "32px", null, "48px", "56px"],
      textAlign: "justify",
      letterSpacing: "wider",
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
    secondary: {
      fontSize: ["16px", null, "24px", null, "32px", "48px"],
      fontWeight: "normal",
      textAlign: "justify",
      letterSpacing: "wide",
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
      letterSpacing: "wide",
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
    subPrimary: {
      fontSize: ["20px", null, "28px", null, "42px", "48px"],
      letterSpacing: "wider",
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
  },
});
