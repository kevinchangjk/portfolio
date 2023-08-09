import { SimpleGrid } from "@chakra-ui/react";
import TechStackCell from "./TechStackCell";
import { Tech } from "@/utils/types";
import data from "../data/tech-stack.json" assert { type: "json" };

function buildCell(techData: Tech) {
  return <TechStackCell techData={techData} key={techData.name} />;
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
      minChildWidth={{
        base: "4rem",
        md: "6rem",
        xl: "8rem",
        "2xl": "10rem",
      }}
      width="full"
      spacingX={{
        base: "2rem",
        md: "4rem",
        xl: "6rem",
        "2xl": "8rem",
      }}
      spacingY={{
        base: "2rem",
        md: "3.5rem",
        xl: "5rem",
        "2xl": "6.5rem",
      }}
      justifyItems="center"
    >
      {buildGrid(data.techStack)}
    </SimpleGrid>
  );
}
