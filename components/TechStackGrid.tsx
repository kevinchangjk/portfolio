import { SimpleGrid } from "@chakra-ui/react";
import TechStackCell from "./TechStackCell";
import { Tech } from "@/utils/types";
import data from "../data/tech-stack.json" assert { type: "json" };

function buildCell(techData: Tech) {
  return <TechStackCell techData={techData} />;
}

function buildGrid(allUrls: Tech[]) {
  const result = [];
  for (const tech of allUrls) {
    const cell = buildCell(tech);
    result.push(cell);
  }

  return result;
}

export default function TechStackGrid() {
  return (
    <SimpleGrid
      minChildWidth="8rem"
      width="full"
      spacingX="7rem"
      spacingY="5rem"
      justifyItems="center"
    >
      {buildGrid(data.techStack)}
    </SimpleGrid>
  );
}
