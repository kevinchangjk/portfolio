import { SimpleGrid } from "@chakra-ui/react";
import TechStackCell from "./TechStackCell";
import data from "../data/tech-stack.json" assert { type: "json" };

interface Tech {
  name: string;
  imageUrl: string;
  sourceUrl: string;
};

function extractUrls(allUrls: Tech[]) {
  const imageUrls = [];
  const sourceUrls = [];
  for (const tech of allUrls) {
    imageUrls.push(tech.imageUrl);
    sourceUrls.push(tech.sourceUrl);
  }
  return { imageUrls, sourceUrls };
}

function buildCell(imageUrl: string, sourceUrl: string) {
  return (<TechStackCell imageUrl={imageUrl} sourceUrl={sourceUrl} />);
}

function buildGrid(allUrls: Tech[]) {
  const { imageUrls, sourceUrls } = extractUrls(allUrls);
  const result = [];
  for (let i = 0; i < imageUrls.length; i++) {
    const cell = buildCell(imageUrls[i], sourceUrls[i]);
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
      marginBottom="13rem"
    >
    {buildGrid(data.techStack)}
    </SimpleGrid>
  );
}
