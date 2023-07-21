import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Introduction() {
  return (
    <VStack
      position="relative"
      width="5xl"
      spacing="2rem"
      justifyContent="center"
    >
      <Heading variant="primary">Hello There</Heading>
      <Text variant="descriptor" fontSize="3xl">
        I am here.
      </Text>
    </VStack>
  );
}
