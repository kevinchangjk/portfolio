import InterestedPositions from "@/components/InterestedPositions";
import { Heading, Text, VStack } from "@chakra-ui/react";

export default function ContactMe() {
  return (
    <main>
      <VStack width="3xl" spacing="4rem" marginTop="8rem" alignItems="left">
        <VStack width="full" spacing="3rem" align="inherit">
          <Heading variant="primary">Contact Me</Heading>
          <Text variant="descriptor" fontSize="2xl">
            I am always on the look out for greater opportunities in these
            fields.
          </Text>
        </VStack>
        <InterestedPositions />
        <VStack width="full" spacing="1rem" alignItems="end">
          <Text width="full" variant="descriptor" textAlign="left" fontSize="3xl">
            You can reach out to me at
          </Text>
          <Text
            variant="descriptor"
            width="min"
            bgImage="linear-gradient(to right, #13B0F5, #E70FAA)"
            bgClip="text"
            textColor="transparent"
            fontSize="5xl"
            textAlign="right"
          >
            kevinchangjk@gmail.com
          </Text>
        </VStack>
      </VStack>
    </main>
  );
}
