import { useAppContext } from "@/context/state";
import { getGradientFlow } from "@/utils/gradient";
import { GRADIENT_FLOW_DURATION } from "@/utils/motion";
import { Tag, Text, Wrap, WrapItem, keyframes } from "@chakra-ui/react";

const shift = keyframes`
  from {
    background-position: 100% 50%;
  }
  to {
    background-position: 0% 50%;
  }
`;

const gradientFlowAnimation = `${shift} ${GRADIENT_FLOW_DURATION} linear infinite`;

const positions = [
  "Software Engineering",
  "Back-end Infrastructure",
  "Distributed Systems",
  "Database Systems",
  "Artificial Intelligence",
  "Blockchain & Web3",
  "Developer Tooling",
];

export default function InterestedPositions() {
  const { gradientTheme } = useAppContext();
  const gradient = getGradientFlow(gradientTheme, "to right");

  function displayPositions(positions: string[]) {
    const allPositions: React.ReactNode[] = [];
    for (let i = 0; i < positions.length; i++) {
      const key = `${positions[i]}-tag`;
      const newPosition = (
        <WrapItem key={key}>
          <Tag
            padding={{
              base: "0.3rem",
              md: "0.5rem",
              xl: "0.8rem",
              "2xl": "1rem",
            }}
            variant="outline"
            role="group"
            position="relative"
            isolation="isolate"
            _hover={{
              transform: "scale(1.03)",
              borderColor: "transparent",
              _before: {
                opacity: 1,
              },
            }}
            _before={{
              content: '""',
              position: "absolute",
              inset: 0,
              zIndex: -1,
              borderRadius: "inherit",
              padding: "1px",
              bg: gradient,
              bgSize: "300% 100%",
              animation: gradientFlowAnimation,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              opacity: 0,
              transition: "opacity 0.2s ease",
            }}
            cursor="default"
          >
            <Text
              variant="powerful"
              fontSize={{
                base: "sm",
                md: "md",
                xl: "xl",
                "2xl": "2xl",
              }}
              _groupHover={{
                bg: gradient,
                bgSize: "300% 100%",
                bgClip: "text",
                textColor: "transparent",
                animation: gradientFlowAnimation,
              }}
            >
              {positions[i]}
            </Text>
          </Tag>
        </WrapItem>
      );
      allPositions.push(newPosition);
    }
    return allPositions;
  }

  return (
    <Wrap
      spacing={{
        base: "0.5rem",
        md: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      }}
    >
      {displayPositions(positions)}
    </Wrap>
  );
}
