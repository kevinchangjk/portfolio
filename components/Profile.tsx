import { HStack, Heading, Image, VStack } from "@chakra-ui/react";
import profile from "@/data/profile.json";
import MainFrame from "./MainFrame";
import { getGradient } from "@/utils/gradient";

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

export default function Profile({
  gradientTheme,
}: {
  gradientTheme: string[];
}) {
  const gradient = getGradient(gradientTheme, "to right");

  return (
    <HStack
      position="relative"
      width="full"
      height="2xl"
      justifyContent="center"
    >
      <MainFrame gradient={gradient} />
      <HStack width="4xl" justify="space-between" zIndex="9">
        <VStack align="start" spacing="0">
          <Heading
            width="full"
            fontSize="64px"
            background={gradient}
            backgroundClip="text"
            textColor="transparent"
            style={{
              transition: "background 3s ease",
            }}
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
          bgGradient={gradient}
        />
      </HStack>
    </HStack>
  );
}
