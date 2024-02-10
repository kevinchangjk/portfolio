import { Heading, Text, VStack } from "@chakra-ui/react";
import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectSummary() {
  function displayProjects() {
    const allProjects = [];
    for (let i = 0; i < projects.length; i++) {
      const key = `${projects[i].title}-card`;
      const newProject = <ProjectCard key={key} projectData={projects[i]} />;
      allProjects.push(newProject);
    }

    return allProjects;
  }

  function ProjectStack() {
    return (
      <VStack
        align="inherit"
        spacing={{
          base: "2rem",
          sm: "2.5rem",
          md: "3rem",
          lg: "3.5rem",
          xl: "4rem",
          "2xl": "4.5rem",
        }}
      >
        {displayProjects()}
      </VStack>
    );
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
            base: "lg",
            md: "xl",
            xl: "2xl",
            "2xl": "3xl",
          }}
          textAlign="justify"
        >
          Shed some sweat and tears (no blood)
        </Text>
      </VStack>
      <ProjectStack />
    </VStack>
  );
}
