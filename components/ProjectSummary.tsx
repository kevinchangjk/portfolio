import { Heading, VStack } from "@chakra-ui/react";
import ProjectGrid from "./ProjectGrid";

export default function ProjectSummary() {
  return (
    <VStack width="full" marginTop="8rem">
      <VStack spacing="3rem" marginBottom="6rem">
        <Heading variant="primary">Projects</Heading>
        <Heading variant="secondary">
          Put some sweat and tears (no blood) into these
        </Heading>
      </VStack>
      <ProjectGrid/>
    </VStack>
  );
}
