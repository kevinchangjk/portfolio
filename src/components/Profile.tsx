import { HStack, Image, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";

const name = "Kevin Chang";
const acrostic = ["Challenger", "Journeyer", "Kickstarter"];

const Name = styled.span`
  font-size: 64px;
  background-image: linear-gradient(to right, #13B0F5, #E70FAA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Acrostic = styled.span`
  font-size: 48px;
`;

function displayAcrostic(acrostic: string[]) {
  const result = [];
  for (const line of acrostic) {
    const newLine = <Acrostic key={`acrostic${line}`}>{line}</Acrostic>;
    result.push(newLine);
  }

  return result;
}

export default function Profile() {
  return (
    <HStack justify="space-between" align="center">
      <VStack align="start" spacing="0">
        <Name>{name}</Name>
        {displayAcrostic(acrostic)}
      </VStack>
      <Image src="/images/profile.jpg" padding="0.5rem" boxSize="22rem" objectFit="cover" borderRadius="full" bgGradient="linear-gradient(to-t, #13B0F5, #E70FAA)"/>
    </HStack>
  );
}
