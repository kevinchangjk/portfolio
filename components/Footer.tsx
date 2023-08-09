import {
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import InternalLink from "./InternalLink";
import { useEffect, useState } from "react";

export default function Footer() {
  const primaryColor = useColorModeValue("gray.2", "gray.4");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  function displayLink(route: string, text: string) {
    return (
      <InternalLink href={route} color={primaryColor} thickness="px">
        <Text
          variant="footer"
          fontSize={{
            base: "sm",
            md: "md",
            xl: "lg",
            "2xl": "xl",
          }}
        >
          {text}
        </Text>
      </InternalLink>
    );
  }

  function displayFooter(width: number) {
    if (width < 624) {
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
            md: "1rem",
            xl: "2rem",
            "2xl": "2.5rem",
          }}
        >
          <HStack
            width={{
              base: "full",
              sm: "80vw",
            }}
            alignSelf="center"
            justifyContent="space-between"
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
                base: "sm",
                md: "md",
                xl: "lg",
                "2xl": "xl",
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
            base: "0.5rem",
            md: "1rem",
            xl: "2rem",
            "2xl": "2.5rem",
          }}
        >
          <Divider bg="gray.2" />
          <HStack width="full" justifyContent="space-between">
            <HStack
              spacing={{
                base: "0.5rem",
                md: "1.5rem",
                xl: "3rem",
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
                  base: "sm",
                  md: "md",
                  xl: "lg",
                  "2xl": "xl",
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

  return displayFooter(width);
}
