import { darkWakatime, lightWakatime } from "@/utils/links";
import {
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function WakatimeSummary() {
  const summary = useColorModeValue(lightWakatime, darkWakatime);

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
          Programming languages {"I've"} been using
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
        fetchPriority="high"
      />
    </VStack>
  );
}
