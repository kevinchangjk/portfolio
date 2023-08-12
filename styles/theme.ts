import { extendTheme } from "@chakra-ui/react";
import { colors, colorConfig } from "@/styles/foundation/colors";
import { Divider } from "@/styles/components/Divider";
import { Text } from "@/styles/components/Text";
import { Heading } from "@/styles/components/Heading";

const extensions = {
  colors,
  colorConfig,
  fonts: {
    body: `'DM Sans', sans-serif`,
    heading: "Montserrat, sans-serif",
    mono: "Menlo, monospace",
  },
  components: {
    Heading,
    Text,
    Divider,
  },
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal",
        _light: {
          bg: "gray.9",
        },
        _dark: {
          bg: "gray.0",
        },
      },
    },
  },
};

export default extendTheme(extensions);
