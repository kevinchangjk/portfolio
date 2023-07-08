import { HStack, Image, Link, defineStyleConfig } from "@chakra-ui/react";
import Logo from "./Logo";
import NextLink from "next/link";

const githubUrl = "https://github.com/kevinchangjk";
const twitterUrl = "https://twitter.com/kevinchangjk";
const linkedinUrl = "https://linkedin.com/in/kevinchangjk";

export const LinkStyles = defineStyleConfig({
  baseStyle: {
    textDecoration: "none",
    fontWeight: "500",
    fontStyle: "normal",
  },
  sizes: {},
  variants: {
    nav: {
      fontSize: "20px",
      color: "gray.3",
    },
  },
  defaultProps: {},
});

export default function Navbar() {
  return (
    <HStack justifyContent="space-between">
      <Logo />
      <HStack spacing="3rem">
        <Link as={NextLink} variant="nav" href="/">
          Home
        </Link>
        <Link as={NextLink} variant="nav" href="/about">
          About
        </Link>
        <Link as={NextLink} variant="nav" href="/projects">
          Projects
        </Link>
        <Link as={NextLink} variant="nav" href="/interests">
          Interests
        </Link>
        <Link as={NextLink} variant="nav" href="/contact-me">
          Contact
        </Link>
        <HStack spacing="1rem">
          <Link href={githubUrl} isExternal={true}>
            <Image src="/images/github-dark.svg" />
          </Link>
          <Link href={twitterUrl} isExternal={true}>
            <Image src="/images/twitter-dark.svg" />
          </Link>
          <Link href={linkedinUrl} isExternal={true}>
            <Image src="/images/linkedin-dark.svg" />
          </Link>
        </HStack>
      </HStack>
    </HStack>
  );
}
