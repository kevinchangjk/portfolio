import { extendTheme } from "@chakra-ui/react";
import { LinkStyles as Link } from "../components/Navbar";

const theme = {
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#FFF",
    gray: {
      1: "#363636",
      2: "#42446E",
      3: "#A7A7A7",
      4: "#CCCCCC"
    },
    blue: "#13B0F5",
    pink: "#E70FAA",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  components: {
    Link
  }
};

export default extendTheme(theme);
