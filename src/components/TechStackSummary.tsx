import { Heading, VStack } from "@chakra-ui/react";
import TechStackGrid from "./TechStackGrid";

export default function TechStackSummary() {
  return (
    <VStack width="6xl" marginBottom="8rem">
      <VStack spacing="3rem" marginBottom="8rem">
        <Heading variant="primary">My Tech Stack</Heading>
        <Heading variant="secondary">
          Some of the technologies I've been working with
        </Heading>
      </VStack>
      <TechStackGrid />
    </VStack>
  );
}
