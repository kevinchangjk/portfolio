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
    heading: "Poppins, serif",
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
      },
    },
  },
};

export default extendTheme(extensions);
