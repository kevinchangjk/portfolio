import { Heading, VStack } from "@chakra-ui/react";
import TechStackGrid from "./TechStackGrid";

export default function TechStackSummary() {
  return (
    <VStack width="6xl">
      <VStack spacing="3rem" marginBottom="9rem">
        <Heading fontSize="48px" color="gray.4">
          My Tech Stack
        </Heading>
        <Heading fontSize="32px" color="gray.3">
          Some of the technologies I've been working with
        </Heading>
      </VStack>
      <TechStackGrid />
    </VStack>
    );
}
