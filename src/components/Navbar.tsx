import { HStack, Link, defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";
import Logo from "./Logo";
import styled from "@emotion/styled";
import NextLink from "next/link";

const Main = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkStyles = defineStyleConfig({
  baseStyle: {
    textDecoration: "none",
    fontWeight: "500",
    fontStyle: "normal"
  },
  sizes: {},
  variants: {
    nav: {
      fontSize: "20px",
      color: "gray.3",
    }
  },
  defaultProps: {
  }
});

export default function Navbar() {
  return (
    <Main>
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
      </HStack>
    </Main>
  );
}
