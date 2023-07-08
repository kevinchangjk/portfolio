import { Box, SimpleGrid } from "@chakra-ui/react";

export default function ProjectGrid() {
  return (
    <SimpleGrid
      minChildWidth="20rem"
      width="full"
      spacingX="3rem"
      spacingY="4rem"
      justifyItems="center"
    >
      <Box backgroundColor="tomato" height="30rem" width="20rem"></Box>
      <Box backgroundColor="tomato" height="30rem" width="20rem"></Box>
      <Box backgroundColor="tomato" height="30rem" width="20rem"></Box>
      <Box backgroundColor="tomato" height="30rem" width="20rem"></Box>
      <Box backgroundColor="tomato" height="30rem" width="20rem"></Box>
      <Box backgroundColor="tomato" height="30rem" width="20rem"></Box>
    </SimpleGrid>
  );
}
