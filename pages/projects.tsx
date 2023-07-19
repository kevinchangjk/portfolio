import ProjectGrid from "@/components/ProjectGrid";
import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Projects() {
  return (
    <main>
      <VStack marginTop="8rem" spacing="8rem">
        <VStack spacing="3rem" alignSelf="start" alignItems="start">
          <Heading variant="subPrimary">Projects</Heading>
          <Text variant="descriptor" fontSize="2xl">
            Things I've built so far
          </Text>
        </VStack>
        <ProjectGrid />
      </VStack>
    </main>
  );
}
