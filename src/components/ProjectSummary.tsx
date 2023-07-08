import { Heading, VStack } from "@chakra-ui/react";
import ProjectGrid from "./ProjectGrid";

export default function ProjectSummary() {
  return (
    <VStack width="6xl">
      <VStack spacing="3rem" marginBottom="8rem">
        <Heading variant="primary">Projects</Heading>
        <Heading variant="secondary">
          Put some sweat and tears (no blood) into these
        </Heading>
      </VStack>
      <ProjectGrid/>
    </VStack>
  );
}
