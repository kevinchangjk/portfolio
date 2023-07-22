import InterestedPositions from "@/components/InterestedPositions";
import { useAppContext } from "@/context/state";
import { getGradient } from "@/utils/gradient";
import { Heading, Text, VStack } from "@chakra-ui/react";

export default function ContactMe() {
  const { gradientTheme } = useAppContext();
  const gradient = getGradient(gradientTheme, "to right");

  return (
    <main>
      <VStack width="3xl" spacing="4rem" marginTop="8rem" alignItems="left">
        <VStack width="full" spacing="3rem" align="inherit">
          <Heading variant="primary">Contact Me</Heading>
          <Text variant="paragraph" fontSize="2xl">
            I am always on the look out for greater opportunities in these
            fields.
          </Text>
        </VStack>
        <InterestedPositions />
        <VStack width="full" spacing="1rem" alignItems="end">
          <Text width="full" variant="paragraph" textAlign="left" fontSize="3xl">
            You can reach out to me at
          </Text>
          <Text
            fontWeight="medium"
            letterSpacing="wide"
            width="min"
            bg={gradient}
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
