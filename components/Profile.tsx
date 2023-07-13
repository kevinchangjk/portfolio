import { HStack, Heading, Image, VStack } from "@chakra-ui/react";
import profile from "@/data/profile.json";

const { name, tagline } = profile;

function displayAcrostic(acrostic: string[]) {
  const result = [];
  for (const line of acrostic) {
    const newLine = (
      <Heading key={`acrostic${line}`} fontSize="48px" color="gray.4">
        {line}
      </Heading>
    );
    result.push(newLine);
  }

  return result;
}

export default function Profile() {
  return (
    <HStack width="5xl" justify="space-between" marginBottom="20rem">
      <VStack align="start" spacing="0">
        <Heading
          fontSize="64px"
          backgroundImage="linear-gradient(to right, #13B0F5, #E70FAA)"
          backgroundClip="text"
          textColor="transparent"
        >
          {name}
        </Heading>
        {displayAcrostic(tagline)}
      </VStack>
      <Image
        src="/images/profile.jpg"
        padding="0.5rem"
        boxSize="22rem"
        objectFit="cover"
        borderRadius="full"
        bgGradient="linear-gradient(to-t, #13B0F5, #E70FAA)"
      />
    </HStack>
  );
}
