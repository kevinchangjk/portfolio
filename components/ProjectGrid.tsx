import { Project } from "@/utils/types";
import { SimpleGrid } from "@chakra-ui/react";
import data from "../data/projects.json" assert { type: "json" };
import ProjectCard from "./ProjectCard";

function buildCard(projectData: Project) {
  return <ProjectCard projectData={projectData} />;
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
      minChildWidth="20rem"
      width="full"
      spacingX="3rem"
      spacingY="4rem"
      justifyItems="center"
    >
      {buildGrid(data.projects)}
    </SimpleGrid>
  );
}
