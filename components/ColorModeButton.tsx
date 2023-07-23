import {
  Button,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { CgSun } from "react-icons/cg";
import { RiMoonFill } from "react-icons/ri";

export default function ColorModeButton() {
  const { toggleColorMode } = useColorMode();

  return (
    <Button padding="0rem" bgColor="transparent" onClick={toggleColorMode}>
      <Icon
        as={useColorModeValue(RiMoonFill, CgSun)}
        boxSize="2rem"
        color={useColorModeValue("gray.3", "gray.4")}
      />
    </Button>
  );
}
