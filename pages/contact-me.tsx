import InterestedPositions from "@/components/InterestedPositions";
import { useAppContext } from "@/context/state";
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
  const gradient = `linear(to-r, ${gradientTheme[0]}, ${gradientTheme[1]}, ${gradientTheme[0]}, ${gradientTheme[1]})`;

  const shift = keyframes`
    from {
      background-position: 100% 50%;
    }
    to {
      background-position: 0% 50%;
    }
  `;

  const animation = `${shift} 3s linear infinite`;

  return (
    <main>
      <VStack
        width={{
          base: "full",
          md: "2xl",
          xl: "4xl",
          "2xl": "5xl",
        }}
        spacing={{
          base: "2rem",
          md: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        }}
        marginTop={{
          base: "6vh",
          md: "12vh",
          xl: "16vh",
          "2xl": "20vh",
        }}
        alignItems="left"
      >
        <VStack
          width="full"
          spacing={{
            base: "1rem",
            md: "2rem",
            xl: "3rem",
            "2xl": "4rem",
          }}
          align="inherit"
        >
          <Heading variant="primary">Contact Me</Heading>
          <Text
            variant="paragraph"
            fontSize={{
              base: "md",
              md: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
          >
            I am always on the look out for opportunities in fields like these.
          </Text>
        </VStack>
        <InterestedPositions />
        <VStack
          width="full"
          spacing={{
            base: "0.5rem",
            md: "0.75rem",
            xl: "1rem",
            "2xl": "1.25rem",
          }}
          alignItems="end"
        >
          <Text
            width="full"
            variant="paragraph"
            textAlign="left"
            fontSize={{
              base: "md",
              md: "xl",
              xl: "3xl",
              "2xl": "4xl",
            }}
          >
            You can reach out to me at
          </Text>
          <HStack width="full">
            <LinkBox>
              <Heading
                fontWeight="semibold"
                letterSpacing="normal"
                width="min"
                bgGradient={gradient}
                bgClip="text"
                bgSize="300% 100%"
                bgPosition="right"
                textColor="transparent"
                fontSize={{
                  base: "2xl",
                  md: "4xl",
                  xl: "5xl",
                  "2xl": "6xl",
                }}
                _hover={{
                  animation: animation,
                }}
              >
                <LinkOverlay href="mailto:kevinchangjk@gmail.com">
                  kevinchangjk@gmail.com
                </LinkOverlay>
              </Heading>
            </LinkBox>
          </HStack>
        </VStack>
      </VStack>
    </main>
  );
}
