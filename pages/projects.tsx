import ProjectSummary from "@/components/ProjectSummary";
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
        width={{
          base: "full",
          md: "2xl",
          xl: "4xl",
          "2xl": "5xl",
        }}
        alignItems="left"
      >
        <ProjectSummary />
      </VStack>
    </main>
  );
}
