import InterestedPositions from "@/components/InterestedPositions";
import { useAppContext } from "@/context/state";
import { getGradient } from "@/utils/gradient";
import {
  HStack,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";

export default function ContactMe() {
  const { gradientTheme } = useAppContext();
  const gradient = getGradient(gradientTheme, "to right");

  const shift = keyframes`
    from, to{
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  `;

  const animation = `${shift} 5s ease-in-out infinite`;

  return (
    <main>
      <VStack width="3xl" spacing="4rem" marginTop="8rem" alignItems="left">
        <VStack width="full" spacing="3rem" align="inherit">
          <Heading variant="primary">Contact Me</Heading>
          <Text variant="paragraph" fontSize="xl">
            I am always on the look out for greater opportunities in fields like these.
          </Text>
        </VStack>
        <InterestedPositions gradient={gradient}/>
        <VStack width="full" spacing="1rem" alignItems="end">
          <Text
            width="full"
            variant="paragraph"
            textAlign="left"
            fontSize="3xl"
          >
            You can reach out to me at
          </Text>
          <HStack width="full">
            <LinkBox>
              <Text
                fontWeight="medium"
                letterSpacing="wide"
                width="min"
                bg={gradient}
                bgClip="text"
                bgSize="150% 100%"
                textColor="transparent"
                fontSize="5xl"
                _hover={{
                  animation: animation,
                }}
              >
                <LinkOverlay href="mailto:kevinchangjk@gmail.com">
                  kevinchangjk@gmail.com
                </LinkOverlay>
              </Text>
            </LinkBox>
          </HStack>
        </VStack>
      </VStack>
    </main>
  );
}
