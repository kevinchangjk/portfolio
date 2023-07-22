import { HStack, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import Logo from "./Logo";
import NextLink from "next/link";
import profile from "@/data/profile.json";
import ColorModeButton from "./ColorModeButton";

const { github, twitter, linkedIn } = profile.socialMedia;

export default function Navbar() {
  return (
    <HStack justifyContent="space-between">
      <Logo />
      <HStack spacing="3rem">
        <Link as={NextLink} href="/">
          <Text variant="strong" fontSize="xl">
          Home
          </Text>
        </Link>
        <Link as={NextLink} href="/about">
          <Text variant="strong" fontSize="xl">
          About
          </Text>
        </Link>
        <Link as={NextLink} href="/projects">
          <Text variant="strong" fontSize="xl">
          Projects
          </Text>
        </Link>
        <Link as={NextLink} href="/contact-me">
          <Text variant="strong" fontSize="xl">
          Contact
          </Text>
        </Link>
        <HStack spacing="1rem">
          <Link href={github} isExternal={true}>
            <Image src={useColorModeValue("/images/social-media/github-light.svg", "/images/social-media/github-dark.svg")} />
          </Link>
          <Link href={twitter} isExternal={true}>
            <Image src={useColorModeValue("/images/social-media/twitter-light.svg", "/images/social-media/twitter-dark.svg")} />
          </Link>
          <Link href={linkedIn} isExternal={true}>
            <Image src={useColorModeValue("/images/social-media/linkedin-light.svg", "/images/social-media/linkedin-dark.svg")} />
          </Link>
        <ColorModeButton />
        </HStack>
      </HStack>
    </HStack>
  );
}
