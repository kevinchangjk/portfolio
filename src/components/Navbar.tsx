import { HStack, Link, defineStyle, defineStyleConfig } from "@chakra-ui/react";
import Logo from "./Logo";
import { styled } from "styled-components";
import NextLink from "next/link";

const Main = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const navLink = defineStyle({
  textDecoration: "none",
  color: "#A7A7A7",
  fontWeight: "normal",
});

export const linkTheme = defineStyleConfig({
  variants: { navLink },
});

export default function Navbar() {
  return (
    <Main>
      <Logo />
      <HStack>
        <Link as={NextLink} variant="navLink" href="/">
          Home
        </Link>
        <Link as={NextLink} variant="navLink" href="/about">
          About
        </Link>
        <Link as={NextLink} variant="navLink" href="/projects">
          Projects
        </Link>
        <Link as={NextLink} variant="navLink" href="/interests">
          Interests
        </Link>
        <Link as={NextLink} variant="navLink" href="/contact-me">
          Contact
        </Link>
      </HStack>
    </Main>
  );
}
