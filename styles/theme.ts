import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

export const Link = defineStyleConfig({
  baseStyle: {
    textDecoration: "none",
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: "wider",
  },
  sizes: {},
  variants: {
    header: {
      fontSize: "20px",
      color: "gray.3",
    },
    footer: {
      fontSize: "18px",
      color: "gray.3",
    },
  },
  defaultProps: {},
});

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
  },
  variants: {
    primary: {
      fontSize: "48px",
      color: "gray.4",
      letterSpacing: "wider",
    },
    secondary: {
      fontSize: "32px",
      fontWeight: "normal",
      color: "gray.3",
      letterSpacing: "wide",
    },
    card: {
      fontSize: "28px",
      fontWeight: "semibold",
      color: "gray.4",
      letterSpacing: "wide",
    },
    subPrimary: {
      fontSize: "42px",
      color: "gray.4",
      letterSpacing: "wider",
    },
  },
});

const Text = defineStyleConfig({
  variants: {
    base: {
      color: "gray.4",
      fontWeight: "normal",
    },
    paragraph: {
      color: "gray.4",
      fontWeight: "normal",
      textAlign: "paragraph",
    },
    descriptor: {
      color: "gray.4",
      fontWeight: "medium",
    },
    detail: {
      color: "gray.4",
      fontWeight: "light",
    },
    subtle: {
      color: "gray.3",
      fontWeight: "light",
    },
  },
  defaultProps: {
    variant: "base",
  },
});

const Divider = defineStyleConfig({
  variants: {
    primary: {
      borderColor: "#A7A7A7",
      borderStyle: "solid",
      borderWidth: "thin",
    },
    secondary: {
      borderColor: "#CCCCCC",
      borderStyle: "solid",
      borderWidth: "1px",
    },
  },
  defaultProps: {
    variant: "primary",
  },
});

const extensions = {
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#FFF",
    gray: {
      0: "#191919",
      1: "#363636",
      2: "#42446E",
      3: "#A7A7A7",
      4: "#CCCCCC",
    },
    blue: "#13B0F5",
    pink: "#E70FAA",
  },
  fonts: {
    body: `'DM Sans', sans-serif`,
    heading: "Poppins, serif",
    mono: "Menlo, monospace",
  },
  components: {
    Link,
    Heading,
    Text,
    Divider,
  },
};

export default extendTheme(extensions);
