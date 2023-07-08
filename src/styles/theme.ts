import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { LinkStyles as Link } from "../components/Navbar";

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold"
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
      color: "gray.3"
    }
  },
  defaultProps: {}
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
      4: "#CCCCCC"
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
  }
};

export default extendTheme(extensions);
