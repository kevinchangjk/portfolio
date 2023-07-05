import { HStack, Heading, Image, VStack } from "@chakra-ui/react";

const name = "Kevin Chang";
const acrostic = ["Challenger", "Journeyer", "Kickstarter"];

function displayAcrostic(acrostic: string[]) {
  const result = [];
  for (const line of acrostic) {
    const newLine = <Heading
                      key={`acrostic${line}`}
                      fontSize="48px"
                    >
                      {line}
                    </Heading>;
    result.push(newLine);
  }

  return result;
}

export default function Profile() {
  return (
    <HStack justify="space-between" align="center">
      <VStack align="start" spacing="0">
        <Heading
          fontSize="64px"
          backgroundImage="linear-gradient(to right, #13B0F5, #E70FAA)"
          backgroundClip="text"
          textColor="transparent"
        >
          {name}
        </Heading>
        {displayAcrostic(acrostic)}
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
