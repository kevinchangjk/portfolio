import { useAppContext } from "@/context/state";
import { getGradient, randomGradient } from "@/utils/gradient";
import { Button, Heading } from "@chakra-ui/react";

export default function Logo() {
  const { gradientTheme, setGradientTheme } = useAppContext();
  const gradient = getGradient(gradientTheme, "to right");

  function newGradient() {
    const newColors = randomGradient();
    setGradientTheme(newColors);
  }

  return (
    <Button
      padding="0rem"
      variant="unstyled"
      _hover={{ transform: "scale(1.05)" }}
      _active={{ transform: "scale(0.95)" }}
      onClick={newGradient}
    >
      <Heading
        fontSize="20px"
        background={gradient}
        backgroundClip="text"
        textColor="transparent"
      >
        kevinchangjk
      </Heading>
    </Button>
  );
}
