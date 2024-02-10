import ProjectSummary from "@/components/projects/ProjectSummary";
import { VStack } from "@chakra-ui/react";

export default function Projects() {
  return (
    <main>
      <VStack
        marginTop={{
          base: "6vh",
          md: "12vh",
          xl: "16vh",
          "2xl": "20vh",
        }}
        width="full"
        alignItems="left"
      >
        <ProjectSummary />
      </VStack>
    </main>
  );
}
