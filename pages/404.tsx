import { Center, Heading, VStack } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <main>
      <Center width="full" height="80vh">
        <VStack spacing="4rem">
          <Heading variant="primary" fontSize="9xl">
            404
          </Heading>
          <Heading variant="secondary">
            Looks like you're at the wrong place...
          </Heading>
        </VStack>
      </Center>
    </main>
  );
}
