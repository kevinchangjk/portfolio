import { HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import { styled } from "styled-components";
import { useRouter } from "next/router";

const Main = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavButton = styled.button`
  margin-left: 4rem;
`;

export default function Navbar() {
  const router = useRouter();

  function goHome() {
    router.push("/");
  }

  function goAbout() {
    router.push("/about");
  }

  function goProjects() {
    router.push("/projects");
  }

  function goInterests() {
    router.push("/interests");
  }

  function goContactMe() {
    router.push("/contact-me");
  }

  return (
    <Main>
      <Logo />
      <HStack>
        <NavButton onClick={goHome}>Home</NavButton>
        <NavButton onClick={goAbout}>About</NavButton>
        <NavButton onClick={goProjects}>Projects</NavButton>
        <NavButton onClick={goInterests}>Interests</NavButton>
        <NavButton onClick={goContactMe}>Contact</NavButton>
      </HStack>
    </Main>
  );
}
