import { Box, SimpleGrid } from "@chakra-ui/react";

/* List of Tech that I actually use
 * Javascript
 * React.js
 * Node.js
 * Git
 * Vim
 * Python
 * Java
 * Next.js
 * PostgreSQL
 * Redis
 * MongoDB
 * C++
 */

export default function TechStackGrid() {
  return (
    <SimpleGrid
      minChildWidth="8rem"
      width="full"
      spacingX="7rem"
      spacingY="5rem"
      marginBottom="13rem"
    >
      <Box bg="tomato" height="8rem"></Box>
      <Box bg="tomato" height="8rem"></Box>
      <Box bg="tomato" height="8rem"></Box>
      <Box bg="tomato" height="8rem"></Box>
      <Box bg="tomato" height="8rem"></Box>
      <Box bg="tomato" height="8rem"></Box>
      <Box bg="tomato" height="8rem"></Box>
      <Box bg="tomato" height="8rem"></Box>
      <Box bg="tomato" height="8rem"></Box>
      <Box bg="tomato" height="8rem"></Box>
    </SimpleGrid>
  );
}
