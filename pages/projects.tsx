import ProjectSummary from "@/components/ProjectSummary";
import TechStackSummary from "@/components/TechStackSummary";
import WakatimeSummary from "@/components/WakatimeSummary";
import { VStack } from "@chakra-ui/react";

export default function Projects() {
  return (
    <main>
      <VStack spacing="8rem">
        <ProjectSummary />
        <TechStackSummary />
        <WakatimeSummary />
      </VStack>
    </main>
  );
}
