import ExperienceCard from "@/components/ExperienceCard";
import {
  Button,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import experiences from "../data/experiences.json";
import { Experience } from "@/utils/types";
import { FaRegFilePdf } from "react-icons/fa";
import Link from "next/link";

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
      <VStack marginTop="8rem" spacing="2rem" width="3xl" alignItems="left">
        <Heading paddingBottom="1rem" variant="primary" textAlign="left">
          About Me
        </Heading>
        <Text variant="paragraph" fontSize="xl">
          I am currently in my third year as an undergraduate at the National
          University of Singapore's School of Computing, and I'm looking to
          graduate in summer 2025.
        </Text>
        <VStack width="full" alignItems="start">
          <Link href="/Notes.pdf" target="_blank">
            <Button
              variant="outline"
              width="13rem"
              borderColor={useColorModeValue("gray.2", "gray.5")}
            >
              <HStack>
                <Icon
                  as={FaRegFilePdf}
                  color={useColorModeValue("gray.2", "gray.5")}
                />
                <Text variant="powerful">View My Resume</Text>
              </HStack>
            </Button>
          </Link>
        </VStack>
        <Heading paddingY="1rem" variant="subPrimary" textAlign="left">
          Work Experience
        </Heading>
        {displayExperiences(work)}
        <Heading paddingY="1rem" variant="subPrimary" textAlign="left">
          Education
        </Heading>
        {displayExperiences(education)}
      </VStack>
    </main>
  );
}
