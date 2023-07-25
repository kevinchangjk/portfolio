import { Heading, Image, VStack, useColorModeValue } from "@chakra-ui/react";

export default function WakatimeSummary() {
  const lightSum =
    "https://wakatime.com/share/@kevinchangjk/bd115c38-03d5-4a45-8a73-c6b89911232c.svg";
  const darkSum =
    "https://wakatime.com/share/@kevinchangjk/b1bac554-077c-43de-8ea2-7a04d3f426e5.svg";

  return (
    <VStack spacing="3rem" align="inherit">
      <Heading variant="primary">Programming Languages</Heading>
      <Heading variant="secondary">
        What languages I've been coding in for the past month
      </Heading>
      <Image boxSize="2xl" src={useColorModeValue(lightSum, darkSum)} />
    </VStack>
  );
}
