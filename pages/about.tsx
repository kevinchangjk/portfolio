import ExperienceCard from "@/components/ExperienceCard";
import TechStackGrid from "@/components/TechStackGrid";
import { Heading, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <main>
      <VStack marginTop="8rem" spacing="6rem" alignItems="left">
        <VStack spacing="2rem" width="3xl" alignItems="left">
          <Heading variant="subPrimary">About Me</Heading>
          <Text variant="paragraph" fontSize="lg">
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </Text>
          <Heading variant="subPrimary">Work Experience</Heading>
          <Text variant="paragraph" fontSize="lg">
            <ExperienceCard />
          </Text>
          <Heading variant="subPrimary">Education</Heading>
          <Text variant="paragraph" fontSize="lg">
            {}
          </Text>
          <Heading variant="subPrimary">My Tech Stack</Heading>
          <Text variant="descriptor" fontSize="xl">
            Some of the technologies I've been working with
          </Text>
        </VStack>
        <TechStackGrid />
      </VStack>
    </main>
  );
}
