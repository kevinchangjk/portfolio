import ExperienceCard from "@/components/ExperienceCard";
import TechStackGrid from "@/components/TechStackGrid";
import { Heading, Text, VStack } from "@chakra-ui/react";
import experiences from "../data/experiences.json";
import { Experience } from "@/utils/types";

export default function About() {
  function displayExperiences(experiences: Experience[]) {
    const allWork = [];
    for (let i = 0; i < experiences.length; i++) {
      const newWork = <ExperienceCard key={i} experience={experiences[i]} />;
      allWork.push(newWork);
    }

    return allWork;
  }

  const { work, education } = experiences;

  return (
    <main>
      <VStack marginTop="8rem" spacing="6rem" alignItems="left">
        <VStack spacing="2rem" width="3xl" alignItems="left">
          <Heading paddingY="1rem" variant="subPrimary">
            About Me
          </Heading>
          <Text variant="paragraph" fontSize="lg">
            I am currently in my third year as an undergraduate at the National
            University of Singapore's School of Computing, and I'm looking to
            graduate in summer 2025.
          </Text>
          <Heading paddingY="1rem" variant="subPrimary">
            Work Experience
          </Heading>
          {displayExperiences(work)}
          <Heading paddingY="1rem" variant="subPrimary">
            Education
          </Heading>
          {displayExperiences(education)}
          <Heading paddingTop="1rem" variant="subPrimary">
            My Tech Stack
          </Heading>
          <Text variant="descriptor" fontSize="xl">
            Some of the technologies I've been working with
          </Text>
        </VStack>
        <TechStackGrid />
      </VStack>
    </main>
  );
}
