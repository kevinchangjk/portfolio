import ProjectSummary from "@/components/ProjectSummary";
import TechStackSummary from "@/components/TechStackSummary";
import { VStack } from "@chakra-ui/react";

export default function Projects() {
  return (
    <main>
      <VStack spacing="8rem">
      <ProjectSummary />
      <TechStackSummary />
      </VStack>
    </main>
  );
}
