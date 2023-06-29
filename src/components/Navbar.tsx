import { Button, HStack } from "@chakra-ui/react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <HStack>
      <Logo />
      <HStack>
        <Button>Home</Button>
      </HStack>
    </HStack>
  );
}
