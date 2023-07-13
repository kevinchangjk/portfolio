import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { LinkStyles as Link } from "../components/Navbar";

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
  },
  sizes: {},
  variants: {
    primary: {
      fontSize: "48px",
      color: "gray.4",
    },
    secondary: {
      fontSize: "32px",
      fontWeight: "normal",
      color: "gray.3",
    },
    card: {
      fontSize: "28px",
      fontWeight: "semibold",
      color: "gray.4",
    },
  },
  defaultProps: {},
});

const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: "normal",
  },
  sizes: {},
  variants: {
    cardBody: {
      fontSize: "18px",
      fontWeight: "light",
      color: "gray.4",
      textAlign: "justify",
    },
    cardFooter: {
      fontSize: "16px",
      fontWeight: "normal",
      color: "white",
    },
    techStack: {
      fontSize: "16px",
      fontWeight: "normal",
      color: "gray.4",
    },
    tech: {
      fontSize: "16px",
      fontWeight: "light",
      color: "gray.4",
    },
  },
  defaultProps: {},
});

const Divider = defineStyleConfig({
  variants: {
    primary: {
      borderColor: "#a7a7a7",
      borderStyle: "solid",
      borderWidth: "thin",
    },
    secondary: {
      borderColor: "#CCCCCC",
      borderStyle: "solid",
      borderWidth: "thin",
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
