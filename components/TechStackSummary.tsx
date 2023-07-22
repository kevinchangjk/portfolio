import { Heading, VStack } from "@chakra-ui/react";
import TechStackGrid from "./TechStackGrid";

export default function TechStackSummary() {
  return (
    <VStack width="full" spacing="6rem" alignItems="center">
      <VStack spacing="3rem" align="inherit">
        <Heading variant="primary">My Tech Stack</Heading>
        <Heading variant="secondary">
          Some of the technologies I've been working with
        </Heading>
      </VStack>
      <TechStackGrid />
    </VStack>
  );
}
