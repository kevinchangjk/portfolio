import { Project } from "@/utils/types";
import { SimpleGrid } from "@chakra-ui/react";
import data from "../data/projects.json" assert { type: "json" };
import ProjectCard from "./ProjectCard";

function buildCard(projectData: Project) {
  return <ProjectCard projectData={projectData} key={projectData.title} />;
}

function buildGrid(allProjects: Project[]) {
  const result = [];
  for (const project of allProjects) {
    const card = buildCard(project);
    result.push(card);
  }

  return result;
}

export default function ProjectGrid() {
  return (
    <SimpleGrid
      minChildWidth={{
        base: "16rem",
        md: "18rem",
        xl: "20rem",
        "2xl": "24rem",
      }}
      width="full"
      spacingX={{
        base: "2rem",
        md: "2.5rem",
        xl: "3rem",
        "2xl": "4rem",
      }}
      spacingY={{
        base: "3rem",
        md: "3.5rem",
        xl: "4rem",
        "2xl": "5rem",
      }}
      justifyItems="center"
    >
      {buildGrid(data.projects)}
    </SimpleGrid>
  );
}
