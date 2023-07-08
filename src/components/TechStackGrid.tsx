import { SimpleGrid } from "@chakra-ui/react";
import TechStackCell from "./TechStackCell";
import data from "../data/tech-stack.json" assert { type: "json" };

interface Tech {
  name: string;
  imageUrl: string;
  sourceUrl: string;
};

function extractUrls(allUrls: Tech[]) {
  const names = [];
  const imageUrls = [];
  const sourceUrls = [];
  for (const tech of allUrls) {
    names.push(tech.name);
    imageUrls.push(tech.imageUrl);
    sourceUrls.push(tech.sourceUrl);
  }
  return { names, imageUrls, sourceUrls };
}

function buildCell(name: string, imageUrl: string, sourceUrl: string) {
  return (<TechStackCell techName={name} imageUrl={imageUrl} sourceUrl={sourceUrl} />);
}

function buildGrid(allUrls: Tech[]) {
  const { names, imageUrls, sourceUrls } = extractUrls(allUrls);
  const result = [];
  for (let i = 0; i < imageUrls.length; i++) {
    const cell = buildCell(names[i], imageUrls[i], sourceUrls[i]);
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
