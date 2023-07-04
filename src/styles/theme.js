import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#FFF",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
};

export default extendTheme(theme);
