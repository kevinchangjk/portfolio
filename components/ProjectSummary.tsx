import { Heading, Text, VStack } from "@chakra-ui/react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectSummary() {
  function displayProjects() {
    const allProjects = [];
    for (let i = 0; i < projects.projects.length; i++) {
      const newProject = <ProjectCard key={i} projectData={projects.projects[i]} />;
      allProjects.push(newProject);
    }

    return allProjects;
  }

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
        spacing={{
          base: "1rem",
          md: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        }}
        align="inherit"
      >
        <Heading variant="primary">Projects</Heading>
        <Text
          variant="descriptor"
          fontSize={{
            base: "xl",
            md: "2xl",
            xl: "3xl",
            "2xl": "4xl",
          }}
        >
          Put some sweat and tears (no blood) into these
        </Text>
      </VStack>
      <VStack align="inherit" spacing={{
        base: "4rem",
        md: "5rem",
        xl: "6rem",
        "2xl": "7rem",
      }}>
        {displayProjects()}
      </VStack>
    </VStack>
  );
}
