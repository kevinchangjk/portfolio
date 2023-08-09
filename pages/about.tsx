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
      <VStack
        marginTop={{
          base: "8vh",
          md: "12vh",
          xl: "16vh",
          "2xl": "20vh",
        }}
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
        width={{ base: "full", md: "2xl", xl: "3xl", "2xl": "4xl" }}
        alignItems="left"
      >
        <Heading
          paddingBottom={{
            base: "0.6rem",
            md: "0.8rem",
            xl: "1rem",
            "2xl": "1.2rem",
          }}
          variant="primary"
          textAlign="left"
        >
          About Me
        </Heading>
        <Text
          variant="paragraph"
          fontSize={{ base: "md", md: "lg", xl: "xl", "2xl": "2xl" }}
        >
          {
            "I am currently in my third year as an undergraduate at the National University of Singapore's School of Computing, and I'm looking to graduate in summer 2025."
          }
        </Text>
        <VStack width="full" alignItems="start">
          <LinkBox>
            <Button
              variant="outline"
              width={{ base: "12rem", xl: "16rem" }}
              borderColor={useColorModeValue("gray.2", "gray.5")}
            >
              <HStack>
                <Icon
                  as={FaRegFilePdf}
                  color={useColorModeValue("gray.2", "gray.5")}
                  boxSize={{
                    base: "1rem",
                    xl: "1.5rem",
                  }}
                />
                <Text variant="powerful" fontSize={{ base: "md", xl: "lg" }}>
                  <LinkOverlay href="/Resume_Portfolio.pdf" isExternal>
                    View My Resume
                  </LinkOverlay>
                </Text>
              </HStack>
            </Button>
          </LinkBox>
        </VStack>
        <Heading
          paddingY={{
            base: "0.6rem",
            md: "0.8rem",
            xl: "1rem",
            "2xl": "1.2rem",
          }}
          variant="subPrimary"
          textAlign="left"
        >
          Work Experience
        </Heading>
        {displayExperiences(work)}
        <Heading
          paddingY={{
            base: "0.6rem",
            md: "0.8rem",
            xl: "1rem",
            "2xl": "1.2rem",
          }}
          variant="subPrimary"
          textAlign="left"
        >
          Education
        </Heading>
        {displayExperiences(education)}
      </VStack>
    </main>
  );
}
