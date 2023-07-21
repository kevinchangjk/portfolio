import { Box } from "@chakra-ui/react";

export default function MainFrame() {
  return (
    <Box
    position="absolute"
    width="full"
    height="2xl"
    >
      <Box
        position="absolute"
        top="0rem"
        left="0rem"
        width="xs"
        height="xs"
        zIndex="0"
        borderStyle="solid none none solid"
        borderWidth="2rem"
        style={{
          borderImage: "linear-gradient(to right, #13B0F5, #E70FAA) 1",
        }}
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
        borderStyle="none solid solid none"
        borderWidth="2rem"
        style={{
          borderImage: "linear-gradient(to right, #13B0F5, #E70FAA) 1",
        }}
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
