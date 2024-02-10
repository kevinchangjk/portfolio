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
    <Button
      padding="0rem"
      minWidth="1.5rem"
      minHeight="1.5rem"
      height="min"
      bgColor="transparent"
      onClick={handleClick}
    >
      <Icon
        as={useColorModeValue(RiMoonFill, CgSun)}
        boxSize={{
          base: "1.7rem",
          md: "2rem",
          xl: "2.2rem",
          "2xl": "2.4rem",
        }}
        color={useColorModeValue("gray.3", "gray.4")}
      />
    </Button>
  );
}
