import {
  Button,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import profile from "@/data/profile.json";
import ColorModeButton from "./ColorModeButton";
import PrimaryLink from "./PrimaryLink";

const { github, twitter, linkedIn } = profile.socialMedia;

export default function Navbar() {
  function headerLink(route: string, text: string) {
    return (
      <PrimaryLink route={route} color={useColorModeValue("gray.3", "gray.4")} external={false}>
        <Text variant="strong" fontSize="xl">
          {text}
        </Text>
      </PrimaryLink>
    );
  }

  function socialMedia(route: string, lightImg: string, darkImg: string) {
    return (
      <Button padding="0" bgColor="transparent">
        <Link href={route} isExternal={true}>
          <Image src={useColorModeValue(lightImg, darkImg)} />
        </Link>
      </Button>
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
          {socialMedia(
            github,
            "/images/social-media/github-light.svg",
            "/images/social-media/github-dark.svg"
          )}
          {socialMedia(
            twitter,
            "/images/social-media/twitter-light.svg",
            "/images/social-media/twitter-dark.svg"
          )}
          {socialMedia(
            linkedIn,
            "/images/social-media/linkedin-light.svg",
            "/images/social-media/linkedin-dark.svg"
          )}
          <ColorModeButton />
        </HStack>
      </HStack>
    </HStack>
  );
}
