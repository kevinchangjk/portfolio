import { Box, useColorModeValue } from "@chakra-ui/react";

export default function MainFrame({ gradient }: { gradient: string }) {
  return (
    <Box position="absolute" width="full" height="2xl">
      <Box
        position="absolute"
        top="0rem"
        left="0rem"
        width="xs"
        height="xs"
        zIndex="0"
        roundedTopLeft="xl"
        bgImage={gradient}
      />
      <Box
        position="absolute"
        top="1.5rem"
        left="1.5rem"
        width="xs"
        height="xs"
        zIndex="1"
        bgColor={useColorModeValue("gray.9", "gray.0")}
        roundedTopLeft="xl"
      />
      <Box
        position="absolute"
        top="0rem"
        left="0rem"
        width="xs"
        height="xs"
        zIndex="1"
        borderStyle="solid"
        borderWidth="1.5rem"
        borderColor={useColorModeValue("transparent #FAFAFA #FAFAFA transparent", "transparent #191919 #191919 transparent")}
      />
      <Box
        position="absolute"
        right="0rem"
        bottom="0rem"
        width="xs"
        height="xs"
        zIndex="0"
        roundedBottomRight="xl"
        bgImage={gradient}
      />
      <Box
        position="absolute"
        right="1.5rem"
        bottom="1.5rem"
        width="xs"
        height="xs"
        zIndex="1"
        bgColor={useColorModeValue("gray.9", "gray.0")}
        roundedBottomRight="xl"
      />
      <Box
        position="absolute"
        right="0rem"
        bottom="0rem"
        width="xs"
        height="xs"
        zIndex="1"
        borderStyle="solid"
        borderWidth="1.5rem"
        borderColor={useColorModeValue("#FAFAFA transparent transparent #FAFAFA", "#191919 transparent transparent #191919")}
      />
    </Box>
  );
}
