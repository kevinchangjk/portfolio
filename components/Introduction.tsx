import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import profile from "@/data/profile.json";
import { useAppContext } from "@/context/state";
import { getGradientFlow } from "@/utils/gradient";
import InternalLink from "./InternalLink";
import PrimaryLink from "./PrimaryLink";
import { motion } from "framer-motion";
import { ENTRY_DELAY, introVariants } from "@/utils/motion";

export default function Introduction({animation}: {animation: string}) {
  const { gradientTheme, isEntryComplete } = useAppContext();
  const gradient = getGradientFlow(gradientTheme, "to right");
  const primaryColor = useColorModeValue("gray.2", "gray.5");

  function buildLink(text: string, route: string) {
    return (
      <InternalLink href={route} color={primaryColor} thickness="2px">
        <Text
          variant="powerful"
          fontSize={{
            base: "md",
            md: "lg",
            lg: "xl",
            xl: "2xl",
            "2xl": "3xl",
          }}
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
        <Text
          variant="powerful"
          fontSize={{
            base: "md",
            md: "lg",
            lg: "xl",
            xl: "2xl",
            "2xl": "3xl",
          }}
        >
          {text}
        </Text>
      </PrimaryLink>
    );
  }

  function displayIntroduction() {
    return (
      <VStack
        position="relative"
        width={{
          base: "full",
          md: "2xl",
          lg: "3xl",
          xl: "4xl",
          "2xl": "5xl",
        }}
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
        justifyContent="center"
        alignItems="start"
      >
        <Heading
          textAlign="justify"
          bg={gradient}
          bgSize="300% 100%"
          bgClip="text"
          textColor="transparent"
          fontSize={{
            base: "3xl",
            md: "4xl",
            xl: "5xl",
            "2xl": "6xl",
          }}
          fontWeight="semibold"
          letterSpacing="wide"
          animation={animation}
        >
          Welcome.
        </Heading>
        <Box
          width="full"
          fontSize={{
            base: "md",
            md: "lg",
            lg: "xl",
            xl: "2xl",
            "2xl": "3xl",
          }}
          fontWeight="medium"
          letterSpacing="normal"
          textAlign="justify"
          lineHeight="tall"
          _light={{ color: "gray.3" }}
          _dark={{ color: "gray.4" }}
        >
          {"I'm"} {buildGithubLink()}, a software developer based in Singapore.
          I{" don't"} want to prattle on too much{" "}
          {buildLink("about me", "/about")}, but programming is my passion, and
          I enjoy working on all kinds of {buildLink("projects", "/projects")},
          from web to blockchain development. Feel free to{" "}
          {buildLink("contact me", "/contact-me")} any time for a chat.
        </Box>
      </VStack>
    );
  }

  return (
    <motion.div
      initial={isEntryComplete ? "introOriginal" : "introInitial"}
      animate="introAnimate"
      variants={introVariants}
      transition={{
        type: "spring",
        duration: isEntryComplete ? 0.3 : 1,
        bounce: 0.2,
        delay: isEntryComplete ? 0 : ENTRY_DELAY,
      }}
    >
      {displayIntroduction()}
    </motion.div>
  );
}
