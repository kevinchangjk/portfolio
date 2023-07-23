import { Divider, HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./Logo";
import PrimaryLink from "./PrimaryLink";

export default function Footer() {
  return (
    <VStack width="full" marginTop="12rem" spacing="2rem">
      <Divider bg="gray.2" />
      <HStack width="full" justifyContent="space-between">
        <HStack spacing="3rem" alignSelf="center" justifyContent="start">
          <PrimaryLink route="/">
            <Text variant="footer" fontSize="lg">
              Home
            </Text>
          </PrimaryLink>
          <PrimaryLink route="/about">
            <Text variant="footer" fontSize="lg">
              About
            </Text>
          </PrimaryLink>
          <PrimaryLink route="/projects">
            <Text variant="footer" fontSize="lg">
              Projects
            </Text>
          </PrimaryLink>
          <PrimaryLink route="/contact-me">
            <Text variant="footer" fontSize="lg">
              Contact
            </Text>
          </PrimaryLink>
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
