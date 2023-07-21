import { Tag, Text, Wrap, WrapItem } from "@chakra-ui/react";


const positions = [
  "Software Engineering",
  "Cybersecurity",
  "Blockchain",
  "Data Analytics",
  "Web Development",
  "DevOps Engineering"
];

export default function InterestedPositions() {
  function displayPositions(positions: string[]) {
    const allPositions: React.ReactNode[] = [];
    for (let i = 0; i < positions.length; i++) {
      const newPosition = (
        <WrapItem key={i}>
          <Tag padding="0.8rem">
            <Text variant="powerful" fontSize="xl" color="gray.4">
            {positions[i]}
            </Text>
          </Tag>
        </WrapItem>
        );
      allPositions.push(newPosition);
    }
    return allPositions;
  }

  return (
    <Wrap spacing="1rem">
      {displayPositions(positions)}
    </Wrap>
  );
}
