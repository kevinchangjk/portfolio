import ProjectSummary from "@/components/ProjectSummary";
import TechStackSummary from "@/components/TechStackSummary";
import WakatimeSummary from "@/components/WakatimeSummary";
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
        spacing={{
          base: "4rem",
          md: "6rem",
          xl: "8rem",
          "2xl": "10rem",
        }}
      >
        <ProjectSummary />
      </VStack>
    </main>
  );
}
