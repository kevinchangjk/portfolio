import { useAppContext } from "@/context/state";
import { getGradientFlow, randomGradient } from "@/utils/gradient";
import { GRADIENT_FLOW_DURATION } from "@/utils/motion";
import { Button, Heading, keyframes } from "@chakra-ui/react";

const shift = keyframes`
    from {
      background-position: 100% 50%;
    }
    to {
      background-position: 0% 50%;
    }
  `;

const gradientFlowAnimation = `${shift} ${GRADIENT_FLOW_DURATION} linear infinite`;

export default function Logo() {
  const { gradientTheme, setGradientTheme } = useAppContext();
  const gradient = getGradientFlow(gradientTheme, "to right");

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
        fontSize={{
          base: "md",
          sm: "lg",
          md: "xl",
          xl: "2xl",
          "2xl": "3xl",
        }}
        fontWeight="semibold"
        lineHeight="full"
        bg={gradient}
        bgSize="300% 100%"
        bgClip="text"
        textColor="transparent"
        animation={gradientFlowAnimation}
      >
        kevinchangjk
      </Heading>
    </Button>
  );
}
