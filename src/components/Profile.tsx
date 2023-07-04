import { HStack, VStack } from "@chakra-ui/react";
import { styled } from "styled-components";

const name = "Kevin Chang";
const acrostic = ["Challenger", "Journeyer", "Kickstarter"];

const Name = styled.span`
  font-size: 64px;
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
    <HStack>
      <VStack>
        <Name>{name}</Name>
        {displayAcrostic(acrostic)}
      </VStack>
    </HStack>
  );
}
