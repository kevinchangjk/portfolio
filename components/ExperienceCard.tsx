import { Experience } from "@/utils/types";
import { CalendarIcon } from "@chakra-ui/icons";
import { Badge, Divider, HStack, Icon, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { HiOfficeBuilding } from "react-icons/hi";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const { title, type, location, period } = experience;
  return (
    <VStack spacing="0.5rem">
      <HStack width="full" justifyContent="space-between">
        <Text fontSize="xl" variant="descriptor">
          {title}
        </Text>
        <Badge
          colorScheme="green"
          variant={useColorModeValue("subtle", "solid")}
          rounded="full"
          paddingX="1rem"
        >
          <Text variant="tag">{type}</Text>
        </Badge>
      </HStack>
      <HStack
        marginBottom="1.5rem"
        paddingX="0.5rem"
        width="full"
        justifyContent="space-between"
      >
        <HStack spacing="0.5rem">
          <Icon as={HiOfficeBuilding} color="gray.4" boxSize="1.2rem" />
          <Text variant="subtle">{location}</Text>
        </HStack>
        <HStack spacing="0.5rem">
          <CalendarIcon color="gray.4" boxSize="1rem" />
          <Text variant="subtle">{period}</Text>
        </HStack>
      </HStack>
      <Divider />
    </VStack>
  );
}
