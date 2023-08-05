import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import profile from "@/data/profile.json";
import { useAppContext } from "@/context/state";
import { getGradient } from "@/utils/gradient";
import InternalLink from "./InternalLink";
import PrimaryLink from "./PrimaryLink";

export default function Introduction() {
  const { gradientTheme } = useAppContext();
  const gradient = getGradient(gradientTheme, "to right");
  const primaryColor = useColorModeValue("gray.2", "gray.5");

  function buildLink(text: string, route: string) {
    return (
      <InternalLink href={route} color={primaryColor} thickness="2px">
        <Text
          variant="powerful"
          fontSize="2xl"
          padding="0rem"
          marginTop="-0.25rem"
        >
          {text}
        </Text>
      </InternalLink>
    );
  }

  function buildGithubLink() {
    const text = "kevinchangjk";
    const route = profile.socialMedia.github;
    return (
      <PrimaryLink href={route} color={primaryColor} thickness="2px">
        <Text variant="powerful" fontSize="2xl">
          {text}
        </Text>
      </PrimaryLink>
    );
  }

  return (
    <VStack
      position="relative"
      width="4xl"
      spacing="2rem"
      justifyContent="center"
      alignItems="start"
    >
      <Heading
        textAlign="justify"
        bg={gradient}
        bgClip="text"
        textColor="transparent"
        fontSize="5xl"
        letterSpacing="wide"
      >
        Welcome.
      </Heading>
      <Box
        width="full"
        fontSize="2xl"
        fontWeight="medium"
        letterSpacing="normal"
        textAlign="justify"
        lineHeight="tall"
        _light={{ color: "gray.3" }}
        _dark={{ color: "gray.4" }}
      >
        {"I'm"} {buildGithubLink()}, a software developer based in Singapore. I
        {"don't"} want to prattle on too much {buildLink("about me", "/about")},
        but programming is my passion, and I enjoy working on all kinds of{" "}
        {buildLink("projects", "/projects")}, from web to blockchain
        development. Feel free to {buildLink("contact me", "/contact-me")} any
        time for a chat.
      </Box>
    </VStack>
  );
}
