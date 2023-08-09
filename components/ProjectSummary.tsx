import { Heading, VStack } from "@chakra-ui/react";
import ProjectGrid from "./ProjectGrid";

export default function ProjectSummary() {
  return (
    <VStack width="full">
      <VStack
        spacing={{
          base: "1rem",
          md: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        }}
        marginBottom={{
          base: "3rem",
          md: "4.5rem",
          xl: "6rem",
          "2xl": "7.5rem",
        }}
      >
        <Heading variant="primary">Projects</Heading>
        <Heading variant="secondary">
          Put some sweat and tears (no blood) into these
        </Heading>
      </VStack>
      <ProjectGrid />
    </VStack>
  );
}
