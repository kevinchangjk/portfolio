import { Heading, Text, VStack } from "@chakra-ui/react";
import TechStackGrid from "./TechStackGrid";

export default function TechStackSummary() {
  return (
    <VStack
      width="full"
      spacing={{
        base: "3rem",
        md: "4.5rem",
        xl: "6rem",
        "2xl": "7.5rem",
      }}
      alignItems="left"
    >
      <VStack
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
        align="inherit"
      >
        <Heading variant="subPrimary">My Tech Stack</Heading>
        <Text
          variant="descriptor"
          fontSize={{
            base: "md",
            md: "lg",
            xl: "xl",
            "2xl": "2xl"
          }}
          textAlign="justify"
        >
          Some of the technologies {"I've"} been working with
        </Text>
      </VStack>
      <TechStackGrid />
    </VStack>
  );
}
