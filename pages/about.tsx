import { VStack } from "@chakra-ui/react";
import TechStackSummary from "@/components/TechStackSummary";
import WakatimeSummary from "@/components/WakatimeSummary";
import ExperienceSummary from "@/components/ExperienceSummary";

export default function About() {
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
          md: "5rem",
          xl: "6rem",
          "2xl": "7rem",
        }}
        width={{
          base: "full",
          md: "2xl",
          xl: "4xl",
          "2xl": "5xl",
        }}
        alignItems="left"
      >
        <ExperienceSummary />
        <TechStackSummary />
        <WakatimeSummary />
      </VStack>
    </main>
  );
}
