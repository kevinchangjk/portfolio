import { HStack, Image, Link, defineStyleConfig } from "@chakra-ui/react";
import Logo from "./Logo";
import NextLink from "next/link";
import profile from "@/data/profile.json";

const { github, twitter, linkedIn } = profile.socialMedia;

export const LinkStyles = defineStyleConfig({
  baseStyle: {
    textDecoration: "none",
    fontWeight: "500",
    fontStyle: "normal",
  },
  sizes: {},
  variants: {
    header: {
      fontSize: "20px",
      color: "gray.3",
    },
    footer: {
      fontSize: "18px",
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
        <Link as={NextLink} variant="header" href="/">
          Home
        </Link>
        <Link as={NextLink} variant="header" href="/about">
          About
        </Link>
        <Link as={NextLink} variant="header" href="/projects">
          Projects
        </Link>
        <Link as={NextLink} variant="header" href="/interests">
          Interests
        </Link>
        <Link as={NextLink} variant="header" href="/contact-me">
          Contact
        </Link>
        <HStack spacing="1rem">
          <Link href={github} isExternal={true}>
            <Image src="/images/social-media/github-dark.svg" />
          </Link>
          <Link href={twitter} isExternal={true}>
            <Image src="/images/social-media/twitter-dark.svg" />
          </Link>
          <Link href={linkedIn} isExternal={true}>
            <Image src="/images/social-media/linkedin-dark.svg" />
          </Link>
        </HStack>
      </HStack>
    </HStack>
  );
}
