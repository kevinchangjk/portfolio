import { Badge, Divider, HStack, Text, VStack } from "@chakra-ui/react";

export default function ExperienceCard() {
  return (
    <VStack>
      <HStack>
        <Text variant="descriptor">Job Title</Text>
        <Badge>Full Time</Badge>
      </HStack>
      <HStack>
        <Text variant="subtle">Company</Text>
        <Text variant="subtle">Dates</Text>
      </HStack>
      <Divider />
    </VStack>
  );
}
