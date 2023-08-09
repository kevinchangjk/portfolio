import { defineStyleConfig } from "@chakra-ui/react";

export const Divider = defineStyleConfig({
  variants: {
    primary: {
      borderStyle: "solid",
      borderWidth: "thin",
      _light: {
        borderColor: "gray.2",
      },
      _dark: {
        borderColor: "gray.4",
      },
    },
    secondary: {
      borderStyle: "solid",
      borderWidth: "1px",
      _light: {
        borderColor: "gray.3",
      },
      _dark: {
        borderColor: "gray.5",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
});
