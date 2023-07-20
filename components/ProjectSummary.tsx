import { Heading, VStack } from "@chakra-ui/react";
import ProjectGrid from "./ProjectGrid";

export default function ProjectSummary() {
  return (
    <VStack width="full" marginTop="8rem">
      <VStack spacing="2rem" marginBottom="6rem">
        <Heading variant="primary">Projects</Heading>
        <Heading variant="card" color="gray.3">
          Put some sweat and tears (no blood) into these
        </Heading>
      </VStack>
      <ProjectGrid/>
    </VStack>
  );
}
