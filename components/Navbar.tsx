import { HStack, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import Logo from "./Logo";
import profile from "@/data/profile.json";
import ColorModeButton from "./ColorModeButton";
import PrimaryLink from "./PrimaryLink";

const { github, twitter, linkedIn } = profile.socialMedia;

export default function Navbar() {
  function headerLink(route: string, text: string) {
    return (
      <PrimaryLink route={route}>
        <Text variant="strong" fontSize="xl">
          {text}
        </Text>
      </PrimaryLink>
    );
  }

  return (
    <HStack justifyContent="space-between">
      <Logo />
      <HStack spacing="3rem">
        {headerLink("/", "Home")}
        {headerLink("/about", "About")}
        {headerLink("/projects", "Projects")}
        {headerLink("/contact-me", "Contact")}
        <HStack spacing="1rem">
          <Link href={github} isExternal={true}>
            <Image
              src={useColorModeValue(
                "/images/social-media/github-light.svg",
                "/images/social-media/github-dark.svg"
              )}
            />
          </Link>
          <Link href={twitter} isExternal={true}>
            <Image
              src={useColorModeValue(
                "/images/social-media/twitter-light.svg",
                "/images/social-media/twitter-dark.svg"
              )}
            />
          </Link>
          <Link href={linkedIn} isExternal={true}>
            <Image
              src={useColorModeValue(
                "/images/social-media/linkedin-light.svg",
                "/images/social-media/linkedin-dark.svg"
              )}
            />
          </Link>
          <ColorModeButton />
        </HStack>
      </HStack>
    </HStack>
  );
}
