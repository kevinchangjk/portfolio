import { Heading, Image, VStack, useColorModeValue } from "@chakra-ui/react";

export default function WakatimeSummary() {
  const lightSum =
    "https://wakatime.com/share/@kevinchangjk/bd115c38-03d5-4a45-8a73-c6b89911232c.svg";
  const darkSum =
    "https://wakatime.com/share/@kevinchangjk/b1bac554-077c-43de-8ea2-7a04d3f426e5.svg";
  const summary = useColorModeValue(lightSum, darkSum);

  return (
    <VStack
      spacing={{
        base: "2rem",
        md: "2.5rem",
        xl: "3rem",
        "2xl": "3.5rem",
      }}
      align="inherit"
    >
      <Heading variant="primary">Coding</Heading>
      <Heading variant="secondary">
        Some of the languages {"I've"} been using
      </Heading>
      <Image
        alt="Wakatime Summary"
        boxSize={{
          base: "lg",
          md: "xl",
          xl: "2xl",
          "2xl": "3xl",
        }}
        rounded="xl"
        src={summary}
        boxShadow="2xl"
      />
    </VStack>
  );
}
