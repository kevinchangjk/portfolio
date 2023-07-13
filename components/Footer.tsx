import { Divider, HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <VStack marginTop="12rem" spacing="2rem">
      <Divider width="6xl" bg="gray.2" />
      <HStack width="6xl" justifyContent="space-between">
        <HStack spacing="3rem" alignSelf="center" justifyContent="start">
          <Link as={NextLink} variant="footer" href="/">
            Home
          </Link>
          <Link as={NextLink} variant="footer" href="/about">
            About
          </Link>
          <Link as={NextLink} variant="footer" href="/projects">
            Projects
          </Link>
          <Link as={NextLink} variant="footer" href="/interests">
            Interests
          </Link>
          <Link as={NextLink} variant="footer" href="/contact-me">
            Contact
          </Link>
        </HStack>
        <HStack>
          <Text variant="subtle" fontSize="lg">
            Developed by
          </Text>
          <Logo />
        </HStack>
      </HStack>
    </VStack>
  );
}
