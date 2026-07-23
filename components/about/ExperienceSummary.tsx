import ExperienceCard from "./ExperienceCard";
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
import experiences from "@/data/experiences.json";
import { Experience } from "@/utils/types";
import { FaRegFilePdf } from "react-icons/fa";
import { resumeFileName } from "@/utils/links";

export default function ExperienceSummary() {
  function displayExperiences(experiences: Experience[]) {
    const allWork = [];
    for (let i = 0; i < experiences.length; i++) {
      const key = `${experiences[i].title}-card`;
      const newWork = <ExperienceCard key={key} experience={experiences[i]} />;
      allWork.push(newWork);
    }

    return allWork;
  }

  function ResumeButton() {
    return (
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
                <LinkOverlay href={resumeFileName} isExternal>
                  View My Resume
                </LinkOverlay>
              </Text>
            </HStack>
          </Button>
        </LinkBox>
      </VStack>
    );
  }

  const { work, education } = experiences;
  return (
    <VStack
      align="inherit"
      spacing={{
        base: "4rem",
        md: "5rem",
        xl: "6rem",
        "2xl": "7rem",
      }}
    >
      <VStack
        align="inherit"
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
      >
        <Heading variant="primary" textAlign="left">
          About Me
        </Heading>
        <VStack
          align="inherit"
          spacing={{
            base: "0.5rem",
            md: "0.75rem",
            xl: "1rem",
            "2xl": "1.25rem",
          }}
        >
          <Text
            variant="paragraph"
            fontSize={{ base: "md", md: "lg", xl: "xl", "2xl": "2xl" }}
          >
            Well, I'm a software engineer. I have been working on production
            back-end systems for over a few year. I enjoy working on all kinds
            of back-end logic, from designing APIs and implementing complex
            business logic to optimizing memory consumption.
          </Text>
          <Text
            variant="paragraph"
            fontSize={{ base: "md", md: "lg", xl: "xl", "2xl": "2xl" }}
          >
            Currently, I'm most interested in building large-scale distributed
            systems that are highly available and performant. While exploring
            these concepts, I've worked in the blockchain space for years
            (arguably some of the most massive distributed systems in the
            world), and now I'm diving deep into high-frequency trading systems.
          </Text>
          <Text
            variant="paragraph"
            fontSize={{ base: "md", md: "lg", xl: "xl", "2xl": "2xl" }}
          >
            Oh you want to know more about my <em>personality</em>? Alright
            alright, sure. I'm a dreamer but also a simple man. I enjoy deep,
            moving stories, and I listen to intense, emotional music, like rock
            and metalcore. Sometimes, I play the piano, do calisthenics, solve
            3x3-5x5 Rubik's cubes, and read books. I pursue fulfilment in what I
            do. I believe fate exists for us to weave.
          </Text>
        </VStack>
        <ResumeButton />
      </VStack>
      <VStack
        align="inherit"
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
      >
        <Heading variant="subPrimary" textAlign="left">
          Work Experience
        </Heading>
        <VStack
          align="inherit"
          spacing={{
            base: "0.5rem",
            md: "0.75rem",
            xl: "1rem",
            "2xl": "1.25rem",
          }}
        >
          {displayExperiences(work)}
        </VStack>
      </VStack>
      <VStack
        align="inherit"
        spacing={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        }}
      >
        <Heading variant="subPrimary" textAlign="left">
          Education
        </Heading>
        <VStack
          align="inherit"
          spacing={{
            base: "0.5rem",
            md: "0.75rem",
            xl: "1rem",
            "2xl": "1.25rem",
          }}
        >
          {displayExperiences(education)}
        </VStack>
      </VStack>
    </VStack>
  );
}
