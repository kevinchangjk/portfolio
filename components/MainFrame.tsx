import { Box, useColorModeValue } from "@chakra-ui/react";

export default function MainFrame({
  gradient,
  animation,
}: {
  gradient: string;
  animation: string;
}) {
  const length = {
    base: "12rem",
    sm: "3xs",
    md: "2xs",
    lg: "xs",
    xl: "sm",
    "2xl": "lg",
  };

  const thickness = {
    base: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.75rem",
    xl: "2rem",
    "2xl": "2.25rem",
  };

  return (
    <Box
      position="absolute"
      width="full"
      height="70vh"
      minHeight={{
        base: "lg",
        md: "xl",
        lg: "38rem",
      }}
    >
      <Box
        position="absolute"
        top="0rem"
        left="0rem"
        width={length}
        height={length}
        zIndex="base"
        roundedTopLeft="xl"
        bgImage={gradient}
        bgSize="300% 100%"
        bgPosition="left"
        animation={animation}
      />
      <Box
        position="absolute"
        top={thickness}
        left={thickness}
        width={length}
        height={length}
        zIndex="1"
        bgColor={useColorModeValue("gray.9", "gray.0")}
        roundedTopLeft="xl"
      />
      <Box
        position="absolute"
        top="0rem"
        left="0rem"
        width={length}
        height={length}
        zIndex="1"
        borderStyle="solid"
        borderWidth={thickness}
        borderColor={useColorModeValue(
          "transparent #FAFAFA #FAFAFA transparent",
          "transparent #191919 #191919 transparent"
        )}
      />
      <Box
        position="absolute"
        right="0rem"
        bottom="0rem"
        width={length}
        height={length}
        zIndex="base"
        roundedBottomRight="xl"
        bgImage={gradient}
        bgSize="300% 100%"
        bgPosition="right"
        animation={animation}
      />
      <Box
        position="absolute"
        right={thickness}
        bottom={thickness}
        width={length}
        height={length}
        zIndex="1"
        bgColor={useColorModeValue("gray.9", "gray.0")}
        roundedBottomRight="xl"
      />
      <Box
        position="absolute"
        right="0rem"
        bottom="0rem"
        width={length}
        height={length}
        zIndex="1"
        borderStyle="solid"
        borderWidth={thickness}
        borderColor={useColorModeValue(
          "#FAFAFA transparent transparent #FAFAFA",
          "#191919 transparent transparent #191919"
        )}
      />
    </Box>
  );
}
