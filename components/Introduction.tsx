import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Introduction() {
  return (
    <VStack spacing="2rem" marginBottom="8rem">
      <Heading variant="primary">
        Hello There
      </Heading>
      <Text variant="descriptor" fontSize="3xl">
      I am here.
      </Text>
    </VStack>
  );
}
