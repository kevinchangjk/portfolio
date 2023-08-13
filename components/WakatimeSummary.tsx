import {
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

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
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
        align="inherit"
        width="full"
      >
        <Heading variant="subPrimary">Coding</Heading>
        <Text
          variant="descriptor"
          fontSize={{
            base: "lg",
            md: "xl",
            xl: "2xl",
            "2xl": "3xl",
          }}
          textAlign="justify"
        >
          Some of the languages {"I've"} been using
        </Text>
      </VStack>
      <Image
        alt="Wakatime Summary"
        maxHeight={{
          base: "md",
          md: "lg",
          lg: "xl",
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
