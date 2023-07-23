import { ThemeConfig, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const colorConfig: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
  },
  variants: {
    primary: {
      fontSize: "48px",
      letterSpacing: "wider",
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
    secondary: {
      fontSize: "32px",
      fontWeight: "normal",
      letterSpacing: "wide",
      _light: {
        color: "gray.3",
      },
      _dark: {
        color: "gray.4",
      },
    },
    card: {
      fontSize: "28px",
      fontWeight: "semibold",
      letterSpacing: "wide",
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
    subPrimary: {
      fontSize: "42px",
      letterSpacing: "wider",
      _light: {
        color: "gray.2",
      },
      _dark: {
        color: "gray.5",
      },
    },
  },
});

const Text = defineStyleConfig({
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
      letterSpacing: "wide",
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
        color: "gray.4",
      },
      _dark: {
        color: "gray.3",
      },
    },
    tag: {
      fontSize: "12px",
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
      letterSpacing: "wide",
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
      letterSpacing: "wide",
      _light: {
        color: "gray.3",
      },
      _dark: {
        color: "gray.4",
      },
    },
    footer: {
      fontWeight: "normal",
      letterSpacing: "wide",
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

const Divider = defineStyleConfig({
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

const extensions = {
  colors: {
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
    Heading,
    Text,
    Divider,
  },
  colorConfig,
};

export default extendTheme(extensions);
