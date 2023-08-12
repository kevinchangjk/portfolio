import { Tag, Text, Wrap, WrapItem } from "@chakra-ui/react";

const positions = [
  "Software Engineering",
  "Web Development",
  "Cybersecurity",
  "Data Analytics",
  "Web 3.0",
  "Blockchain Development",
];

export default function InterestedPositions() {
  function displayPositions(positions: string[]) {
    const allPositions: React.ReactNode[] = [];
    for (let i = 0; i < positions.length; i++) {
      const key = `${positions[i]}-tag`;
      const newPosition = (
        <WrapItem key={key}>
          <Tag
            padding={{
              base: "0.3rem",
              md: "0.5rem",
              xl: "0.8rem",
              "2xl": "1rem",
            }}
            variant="outline"
          >
            <Text
              variant="powerful"
              fontSize={{
                base: "sm",
                md: "md",
                xl: "xl",
                "2xl": "2xl",
              }}
            >
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
    <Wrap
      spacing={{
        base: "0.5rem",
        md: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      }}
    >
      {displayPositions(positions)}
    </Wrap>
  );
}
