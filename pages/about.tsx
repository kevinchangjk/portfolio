import ExperienceCard from "@/components/ExperienceCard";
import {
  Button,
  HStack,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import experiences from "../data/experiences.json";
import { Experience } from "@/utils/types";
import { FaRegFilePdf } from "react-icons/fa";

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
          {
            "I am currently in my third year as an undergraduate at the National University of Singapore's School of Computing, and I'm looking to graduate in summer 2025."
          }
        </Text>
        <VStack width="full" alignItems="start">
          <LinkBox>
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
                <Text variant="powerful">
                  <LinkOverlay href="/Notes.pdf" isExternal>
                    View My Resume
                  </LinkOverlay>
                </Text>
              </HStack>
            </Button>
          </LinkBox>
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
