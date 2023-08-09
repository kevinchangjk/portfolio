import { Box, useColorModeValue } from "@chakra-ui/react";

export default function MainFrame({ gradient }: { gradient: string }) {
  return (
    <Box
      position="absolute"
      width="full"
      height="70vh"
      minHeight={{
        base: "lg",
        md: "xl",
        lg: "38rem",
      }}
    >
      <Box
        position="absolute"
        top="0rem"
        left="0rem"
        width={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        height={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        zIndex="0"
        roundedTopLeft="xl"
        bgImage={gradient}
      />
      <Box
        position="absolute"
        top={{
          base: "1rem",
          sm: "1.25rem",
          lg: "1.5rem",
          "2xl": "2rem",
        }}
        left={{
          base: "1rem",
          sm: "1.25rem",
          lg: "1.5rem",
          "2xl": "2rem",
        }}
        width={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        height={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        zIndex="1"
        bgColor={useColorModeValue("gray.9", "gray.0")}
        roundedTopLeft="xl"
      />
      <Box
        position="absolute"
        top="0rem"
        left="0rem"
        width={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        height={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        zIndex="1"
        borderStyle="solid"
        borderWidth="2rem"
        borderColor={useColorModeValue(
          "transparent #FAFAFA #FAFAFA transparent",
          "transparent #191919 #191919 transparent"
        )}
      />
      <Box
        position="absolute"
        right="0rem"
        bottom="0rem"
        width={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        height={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        zIndex="0"
        roundedBottomRight="xl"
        bgImage={gradient}
      />
      <Box
        position="absolute"
        right={{
          base: "1rem",
          sm: "1.25rem",
          lg: "1.5rem",
          "2xl": "2rem",
        }}
        bottom={{
          base: "1rem",
          sm: "1.25rem",
          lg: "1.5rem",
          "2xl": "2rem",
        }}
        width={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        height={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        zIndex="1"
        bgColor={useColorModeValue("gray.9", "gray.0")}
        roundedBottomRight="xl"
      />
      <Box
        position="absolute"
        right="0rem"
        bottom="0rem"
        width={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        height={{
          base: "3xs",
          sm: "2xs",
          lg: "xs",
          "2xl": "sm",
        }}
        zIndex="1"
        borderStyle="solid"
        borderWidth="2rem"
        borderColor={useColorModeValue(
          "#FAFAFA transparent transparent #FAFAFA",
          "#191919 transparent transparent #191919"
        )}
      />
    </Box>
  );
}
