import { Divider, HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <VStack width="full" marginTop="12rem" spacing="2rem">
      <Divider bg="gray.2" />
      <HStack width="full" justifyContent="space-between">
        <HStack spacing="3rem" alignSelf="center" justifyContent="start">
          <Link as={NextLink} href="/">
            <Text variant="footer" fontSize="lg">
            Home
            </Text>
          </Link>
          <Link as={NextLink} href="/about">
            <Text variant="footer" fontSize="lg">
            About
            </Text>
          </Link>
          <Link as={NextLink} href="/projects">
            <Text variant="footer" fontSize="lg">
            Projects
            </Text>
          </Link>
          <Link as={NextLink} href="/contact-me">
            <Text variant="footer" fontSize="lg">
            Contact
            </Text>
          </Link>
        </HStack>
        <HStack spacing="0.7rem">
          <Text variant="subtle" fontSize="lg">
            Designed and Built by
          </Text>
          <Logo />
        </HStack>
      </HStack>
    </VStack>
  );
}
