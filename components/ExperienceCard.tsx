import { Experience } from "@/utils/types";
import { CalendarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiOfficeBuilding } from "react-icons/hi";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const { title, type, location, period } = experience;
  return (
    <VStack
      spacing={{
        base: "0.2rem",
        md: "0.35rem",
        xl: "0.5rem",
        "2xl": "0.75rem",
      }}
    >
      <HStack width="full" justifyContent="space-between">
        <Text
          fontSize={{
            base: "md",
            md: "lg",
            xl: "xl",
            "2xl": "2xl",
          }}
          variant="descriptor"
        >
          {title}
        </Text>
        <Badge
          colorScheme="green"
          variant={useColorModeValue("subtle", "solid")}
          rounded="full"
          paddingX={{
            base: "0.6rem",
            md: "0.8rem",
            xl: "1rem",
            "2xl": "1.2rem",
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="tag">{type}</Text>
        </Badge>
      </HStack>
      <HStack
        marginBottom={{
          base: "0.5rem",
          md: "1rem",
          xl: "1.5rem",
          "2xl": "2rem",
        }}
        paddingX={{
          base: "0rem",
          md: "0.25rem",
          xl: "0.5rem",
          "2xl": "0.75rem",
        }}
        width="full"
        justifyContent="space-between"
      >
        <HStack
          spacing={{
            base: "0.2rem",
            md: "0.4rem",
            xl: "0.5rem",
            "2xl": "0.75rem",
          }}
        >
          <Icon
            as={HiOfficeBuilding}
            color="gray.4"
            boxSize={{
              base: "0.8rem",
              md: "1rem",
              xl: "1.2rem",
              "2xl": "1.4rem",
            }}
          />
          <Text
            variant="subtle"
            fontSize={{
              base: "xs",
              md: "sm",
              xl: "md",
              "2xl": "lg",
            }}
          >
            {location}
          </Text>
        </HStack>
        <HStack
          spacing={{
            base: "0.3rem",
            md: "0.5rem",
            xl: "0.6rem",
            "2xl": "0.8rem",
          }}
        >
          <CalendarIcon
            color="gray.4"
            boxSize={{
              base: "0.7rem",
              md: "0.9rem",
              xl: "1rem",
              "2xl": "1.2rem",
            }}
          />
          <Text
            variant="subtle"
            fontSize={{
              base: "xs",
              md: "sm",
              xl: "md",
              "2xl": "lg",
            }}
          >
            {period}
          </Text>
        </HStack>
      </HStack>
      <Divider />
    </VStack>
  );
}
