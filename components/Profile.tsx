import { Box, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import profile from "@/data/profile.json";
import MainFrame from "./MainFrame";

const { name, tagline } = profile;

function displayAcrostic(acrostic: string[]) {
  const result = [];
  for (const line of acrostic) {
    const newLine = (
      <Heading key={`acrostic${line}`} variant="primary">
        {line}
      </Heading>
    );
    result.push(newLine);
  }

  return result;
}

export default function Profile() {
  return (
    <HStack
      position="relative"
      width="full"
      height="2xl"
      justifyContent="center"
    >
      <MainFrame />
      <HStack width="4xl" justify="space-between" zIndex="9">
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
    </HStack>
  );
}
