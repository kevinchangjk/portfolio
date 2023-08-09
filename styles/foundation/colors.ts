import { ThemeConfig } from "@chakra-ui/react";

export const colors = {
  transparent: "transparent",
  black: "#000",
  white: "#FFF",
  gray: {
    0: "#191919",
    1: "#363636",
    2: "#42446E",
    3: "#666666",
    4: "#A7A7A7",
    5: "#CCCCCC",
    6: "#D9D9D9",
    7: "#EBEBEB",
    8: "#F0F0F0",
    9: "#FAFAFA",
  },
  blue: "#13B0F5",
  pink: "#E70FAA",
};

export const colorConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};
