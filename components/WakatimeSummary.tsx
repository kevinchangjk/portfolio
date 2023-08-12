import { Heading, Image, VStack, useColorModeValue } from "@chakra-ui/react";

export default function WakatimeSummary() {
  const lightSum =
    "https://wakatime.com/share/@kevinchangjk/bd115c38-03d5-4a45-8a73-c6b89911232c.svg";
  const darkSum =
    "https://wakatime.com/share/@kevinchangjk/b1bac554-077c-43de-8ea2-7a04d3f426e5.svg";
  const summary = useColorModeValue(lightSum, darkSum);

  return (
    <VStack
      width="full"
      align="inherit"
      spacing={{
        base: "3rem",
        md: "4.5rem",
        xl: "6rem",
        "2xl": "7.5rem",
      }}
    >
      <VStack
        spacing={{
          base: "1rem",
          md: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        }}
        align="inherit"
        width="full"
      >
        <Heading variant="primary">Coding</Heading>
        <Heading
          variant="secondary"
          marginX={{
            base: "2rem",
            sm: "0rem",
          }}
        >
          Some of the languages {"I've"} been using
        </Heading>
      </VStack>
      <Image
        alt="Wakatime Summary"
        maxHeight={{
          base: "lg",
          md: "xl",
          lg: "2xl",
          xl: "3xl",
          "2xl": "4xl",
        }}
        rounded="xl"
        src={summary}
        boxShadow="2xl"
      />
    </VStack>
  );
}
