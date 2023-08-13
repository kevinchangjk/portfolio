import { defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
  variants: {
    base: {
      fontWeight: "normal",
    },
    paragraph: {
      fontWeight: "normal",
      textAlign: "justify",
      _light: {
        color: "gray.3",
      },
      _dark: {
        color: "gray.5",
      },
    },
    descriptor: {
      fontWeight: "medium",
      letterSpacing: ["normal", null, "wide"],
      _light: {
        color: "gray.3",
      },
      _dark: {
        color: "gray.4",
      },
    },
    detail: {
      fontWeight: "light",
      _light: {
        color: "gray.3",
      },
      _dark: {
        color: "gray.5",
      },
    },
    subtle: {
      fontWeight: "light",
      _light: {
        color: "gray.3",
      },
      _dark: {
        color: "gray.4",
      },
    },
    tag: {
      fontSize: ["8px", null, "10px", null, "12px", "14px"],
      textAlign: "center",
      fontWeight: "medium",
      _light: {
        color: "gray.3",
      },
      _dark: {
        color: "gray.5",
      },
    },
    powerful: {
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: ["normal", null, "wide"],
      textTransform: "uppercase",
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
    strong: {
      fontWeight: "bold",
      letterSpacing: ["normal", null, "wide"],
      _light: {
        color: "gray.3",
      },
      _dark: {
        color: "gray.4",
      },
    },
    footer: {
      fontWeight: "normal",
      letterSpacing: ["normal", null, "wide"],
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.4",
      },
    },
  },
  defaultProps: {
    variant: "base",
  },
});
