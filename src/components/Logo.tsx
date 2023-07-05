import { Heading } from "@chakra-ui/react";

const alias = "kevinchangjk";

export default function Logo() {
  return (
      <Heading
        fontSize="20px"
        backgroundImage="linear-gradient(to right, #13B0F5, #E70FAA)"
        backgroundClip="text"
        textColor="transparent"
        >
        {alias}
      </Heading>
      );
}
