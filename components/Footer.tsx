import {
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import PrimaryLink from "./PrimaryLink";

export default function Footer() {
  function displayLink(route: string, text: string) {
    return (
      <PrimaryLink
        route={route}
        color={useColorModeValue("gray.2", "gray.4")}
        external={false}
      >
        <Text variant="footer" fontSize="lg">
          {text}
        </Text>
      </PrimaryLink>
    );
  }

  return (
    <VStack width="full" marginTop="12rem" spacing="2rem">
      <Divider bg="gray.2" />
      <HStack width="full" justifyContent="space-between">
        <HStack spacing="3rem" alignSelf="center" justifyContent="start">
          {displayLink("/", "Home")}
          {displayLink("/about", "About")}
          {displayLink("/projects", "Projects")}
          {displayLink("/contact-me", "Contact")}
        </HStack>
        <HStack spacing="0.5rem">
          <Text variant="subtle" fontSize="lg">
            Designed and Built by
          </Text>
          <Logo />
        </HStack>
      </HStack>
    </VStack>
  );
}
