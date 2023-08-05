import {
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import InternalLink from "./InternalLink";

export default function Footer() {
  const primaryColor = useColorModeValue("gray.2", "gray.4");

  function displayLink(route: string, text: string) {
    return (
      <InternalLink href={route} color={primaryColor} thickness="px">
        <Text variant="footer" fontSize="lg">
          {text}
        </Text>
      </InternalLink>
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
