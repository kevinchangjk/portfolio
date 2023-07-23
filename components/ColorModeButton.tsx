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
  function handleClick() {
    const styleEl = document.createElement("style");
    const cssText = document.createTextNode(
      "html * { transition: color, background-color, border-color, background-image, 0.3s ease-out!important }"
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    toggleColorMode();
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 300);
  }

  return (
    <Button padding="0rem" bgColor="transparent" onClick={handleClick}>
      <Icon
        as={useColorModeValue(RiMoonFill, CgSun)}
        boxSize="2rem"
        color={useColorModeValue("gray.3", "gray.4")}
      />
    </Button>
  );
}
