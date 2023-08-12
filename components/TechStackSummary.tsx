import { Heading, VStack } from "@chakra-ui/react";
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
      alignItems="center"
    >
      <VStack
        spacing={{
          base: "1rem",
          md: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        }}
        align="inherit"
      >
        <Heading variant="primary">My Tech Stack</Heading>
        <Heading
          variant="secondary"
          marginX={{
            base: "2rem",
            sm: "0rem",
          }}
        >
          Some of the technologies {"I've"} been working with
        </Heading>
      </VStack>
      <TechStackGrid />
    </VStack>
  );
}
