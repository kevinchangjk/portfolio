import {
  Button,
  Divider,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import profile from "@/data/profile.json";
import ColorModeButton from "./ColorModeButton";
import InternalLink from "./InternalLink";
import { useEffect, useState } from "react";

const { github, linkedIn } = profile.socialMedia;

export default function Navbar() {
  const primaryColor = useColorModeValue("gray.3", "gray.4");
  const githubImage = useColorModeValue(
    "/images/social-media/github-light.svg",
    "/images/social-media/github-dark.svg"
  );
  const linkedInImage = useColorModeValue(
    "/images/social-media/linkedin-light.svg",
    "/images/social-media/linkedin-dark.svg"
  );
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  function headerLink(route: string, text: string) {
    return (
      <InternalLink href={route} color={primaryColor} thickness="2px">
        <Text
          variant="strong"
          fontSize={{
            base: "md",
            md: "lg",
            xl: "xl",
            "2xl": "2xl",
          }}
        >
          {text}
        </Text>
      </InternalLink>
    );
  }

  function socialMedia(route: string, image: string) {
    return (
      <LinkBox>
        <Button
          padding="0"
          minW="1.5rem"
          minH="1.5rem"
          height="min"
          bgColor="transparent"
        >
          <LinkOverlay href={route} isExternal={true}>
            <Image
              src={image}
              alt="Social Media"
              boxSize={{
                base: "1.5rem",
                md: "1.75rem",
                xl: "2rem",
                "2xl": "2.25rem",
              }}
            />
          </LinkOverlay>
        </Button>
      </LinkBox>
    );
  }

  function displayHeader(width: number) {
    if (width < 624) {
      return (
        <VStack width="full">
          <HStack width="full" justifyContent="space-between">
            <Logo />
            <HStack
              spacing={{
                base: "0.75rem",
                sm: "1rem",
              }}
            >
              {socialMedia(github, githubImage)}
              {socialMedia(linkedIn, linkedInImage)}
              <ColorModeButton />
            </HStack>
          </HStack>
          <Divider />
          <HStack
            width={{
              base: "full",
              sm: "80vw",
            }}
            alignSelf="center"
            justifyContent="space-between"
          >
            {headerLink("/", "Home")}
            {headerLink("/about", "About")}
            {headerLink("/projects", "Projects")}
            {headerLink("/contact-me", "Contact")}
          </HStack>
        </VStack>
      );
    } else {
      return (
        <HStack width="full" justifyContent="space-between">
          <Logo />
          <HStack
            spacing={{
              base: "0.5rem",
              md: "1.5rem",
              xl: "3rem",
            }}
          >
            {headerLink("/", "Home")}
            {headerLink("/about", "About")}
            {headerLink("/projects", "Projects")}
            {headerLink("/contact-me", "Contact")}
            <HStack
              spacing={{
                base: "0.5rem",
                md: "0.75rem",
                xl: "1rem",
                "2xl": "1.25rem",
              }}
            >
              {socialMedia(github, githubImage)}
              {socialMedia(linkedIn, linkedInImage)}
              <ColorModeButton />
            </HStack>
          </HStack>
        </HStack>
      );
    }
  }

  return displayHeader(width);
}
