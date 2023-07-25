import ProjectSummary from "@/components/ProjectSummary";
import TechStackSummary from "@/components/TechStackSummary";
import { Image, VStack } from "@chakra-ui/react";

export default function Projects() {
  return (
    <main>
      <VStack spacing="8rem">
        <ProjectSummary />
        <TechStackSummary />
        <Image
          boxSize="2xl"
          src="https://wakatime.com/share/@kevinchangjk/bd115c38-03d5-4a45-8a73-c6b89911232c.svg"
        />
        <Image
          boxSize="2xl"
          src="https://wakatime.com/share/@kevinchangjk/b1bac554-077c-43de-8ea2-7a04d3f426e5.svg"
        />
      </VStack>
    </main>
  );
}
