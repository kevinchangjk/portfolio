import { Box } from "@chakra-ui/react";

export default function MainFrame() {
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
        bgImage="linear-gradient(to right, #13B0F5, #E70FAA) 1"
      />
      <Box
        position="absolute"
        top="2rem"
        left="2rem"
        width="xs"
        height="xs"
        zIndex="1"
        bgColor="gray.0"
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
        borderWidth="2rem"
        borderColor="transparent #191919 #191919 transparent"
      />
      <Box
        position="absolute"
        right="0rem"
        bottom="0rem"
        width="xs"
        height="xs"
        zIndex="0"
        roundedBottomRight="xl"
        bgImage="linear-gradient(to right, #13B0F5, #E70FAA) 1"
      />
      <Box
        position="absolute"
        right="2rem"
        bottom="2rem"
        width="xs"
        height="xs"
        zIndex="1"
        bgColor="gray.0"
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
        borderWidth="2rem"
        borderColor="#191919 transparent transparent #191919"
      />
    </Box>
  );
}
