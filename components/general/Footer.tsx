import {
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Logo from "./Logo";
import InternalLink from "./InternalLink";

export default function Footer() {
  const primaryColor = useColorModeValue("gray.2", "gray.4");
  const [isMobile] = useMediaQuery("(max-width: 592px)");

  function displayLink(route: string, text: string) {
    return (
      <InternalLink href={route} color={primaryColor} thickness="px">
        <Text
          variant="footer"
          fontSize={{
            base: "12px",
            sm: "13px",
            md: "14px",
            lg: "16px",
            xl: "18px",
            "2xl": "20px",
          }}
        >
          {text}
        </Text>
      </InternalLink>
    );
  }

  function displayFooter() {
    if (isMobile) {
      return (
        <VStack
          width="full"
          marginTop={{
            base: "12vh",
            md: "16vh",
            xl: "20vh",
            "2xl": "24vh",
          }}
          spacing={{
            base: "0.5rem",
            sm: "0.75rem",
          }}
        >
          <Divider />
          <HStack
            width={{
              base: "full",
              sm: "80vw",
            }}
            alignSelf="center"
            justifyContent="space-around"
          >
            {displayLink("/", "Home")}
            {displayLink("/about", "About")}
            {displayLink("/projects", "Projects")}
            {displayLink("/contact-me", "Contact")}
          </HStack>
          <Divider />
          <HStack spacing="0.5rem">
            <Text
              variant="subtle"
              fontSize={{
                  base: "12px",
                  sm: "13px",
              }}
            >
              Designed and Built by
            </Text>
            <Logo />
          </HStack>
        </VStack>
      );
    } else {
      return (
        <VStack
          width="full"
          marginTop={{
            base: "12vh",
            md: "16vh",
            xl: "20vh",
            "2xl": "24vh",
          }}
          spacing={{
            sm: "0.75rem",
            md: "1rem",
            lg: "1.5rem",
            xl: "2rem",
            "2xl": "2.5rem",
          }}
        >
          <Divider bg="gray.2" />
          <HStack width="full" justifyContent="space-between">
            <HStack
              spacing={{
                sm: "1rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "3rem",
                "2xl": "3.5rem",
              }}
              alignSelf="center"
              justifyContent="start"
            >
              {displayLink("/", "Home")}
              {displayLink("/about", "About")}
              {displayLink("/projects", "Projects")}
              {displayLink("/contact-me", "Contact")}
            </HStack>
            <HStack spacing="0.5rem">
              <Text
                variant="subtle"
                fontSize={{
                  sm: "13px",
                  md: "14px",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
              >
                Designed and Built by
              </Text>
              <Logo />
            </HStack>
          </HStack>
        </VStack>
      );
    }
  }

  return displayFooter();
}
