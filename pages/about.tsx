import ExperienceCard from "@/components/ExperienceCard";
import { Heading, Text, VStack } from "@chakra-ui/react";
import experiences from "../data/experiences.json";
import { Experience } from "@/utils/types";
import TechStackSummary from "@/components/TechStackSummary";

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
      <VStack marginTop="8rem" spacing="4rem" alignItems="center">
        <VStack spacing="2rem" width="3xl" alignItems="left">
          <Heading paddingBottom="1rem" variant="primary" textAlign="center">
            About Me
          </Heading>
          <Text variant="paragraph" fontSize="lg">
            I am currently in my third year as an undergraduate at the National
            University of Singapore's School of Computing, and I'm looking to
            graduate in summer 2025.
          </Text>
          <Heading paddingY="1rem" variant="subPrimary" textAlign="center">
            Work Experience
          </Heading>
          {displayExperiences(work)}
          <Heading paddingY="1rem" variant="subPrimary" textAlign="center">
            Education
          </Heading>
          {displayExperiences(education)}
        </VStack>
        <TechStackSummary />
      </VStack>
    </main>
  );
}
