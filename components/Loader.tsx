import { Box, Spinner, useColorModeValue } from "@chakra-ui/react";

export default function Loader() {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      zIndex="toast"
      width="full"
      height="full"
      bg={useColorModeValue("gray.9", "gray.0")}
      transition={{
        duration: "3s",
      }}
      animation={{
        opacity: 0,
      }}
    >
      <Spinner />
    </Box>
  );
}
