import {
  Button,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import profile from "@/data/profile.json";
import { useAppContext } from "@/context/state";
import { getGradient } from "@/utils/gradient";
import PrimaryLink from "./PrimaryLink";

function buildLink(text: string, route: string, external: boolean) {
  return (
    <Button
      padding="0rem"
      marginTop="-0.3rem"
      bgColor="transparent"
      variant="unstyled"
    >
      <PrimaryLink
        href={route}
        color={useColorModeValue("gray.2", "gray.5")}
        external={external}
        thickness="2px"
      >
        <Text variant="powerful" fontSize="2xl">
          {text}
        </Text>
      </PrimaryLink>
    </Button>
  );
}

export default function Introduction() {
  const { gradientTheme } = useAppContext();
  const gradient = getGradient(gradientTheme, "to right");
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
      <Text
        width="full"
        variant="descriptor"
        fontSize="2xl"
        textAlign="justify"
        lineHeight="tall"
        letterSpacing="normal"
      >
        I'm {buildLink("kevinchangjk", profile.socialMedia.github, true)}, a
        software developer based in Singapore. I don't want to prattle on too
        much {buildLink("about me", "/about", false)}, but programming is my
        passion, and I enjoy working on all kinds of{" "}
        {buildLink("projects", "/projects", false)}, from web to blockchain
        development. Feel free to{" "}
        {buildLink("contact me", "/contact-me", false)} any time for a chat.
      </Text>
    </VStack>
  );
}
