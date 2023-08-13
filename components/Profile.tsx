import {
  HStack,
  Heading,
  Image,
  VStack,
  keyframes,
  useMediaQuery,
} from "@chakra-ui/react";
import profile from "@/data/profile.json";
import MainFrame from "./MainFrame";
import { getGradientFlow } from "@/utils/gradient";
import { useAppContext } from "@/context/state";

const { name, tagline } = profile;
const shift = keyframes`
    from {
      background-position: 100% 50%;
    }
    to {
      background-position: 0% 50%;
    }
  `;

const gradientFlowAnimation = `${shift} 5s linear infinite`;

export default function Profile() {
  const { gradientTheme } = useAppContext();
  const gradient = getGradientFlow(gradientTheme, "to right");
  const [isMobile] = useMediaQuery("(max-width: 1090px)");

  function displayAcrostic(acrostic: string[]) {
    const result = [];
    for (const line of acrostic) {
      const newLine = (
        <Heading key={`acrostic-${line}`} variant="primary">
          {line}
        </Heading>
      );
      result.push(newLine);
    }

    return result;
  }

  function displayFullAcrostic() {
    return (
      <VStack align="start" spacing="0">
        <Heading
          width="full"
          fontSize={{
            base: "32px",
            sm: "40px",
            md: "48px",
            lg: "56px",
            xl: "64px",
            "2xl": "72px",
          }}
          fontWeight="semibold"
          letterSpacing="normal"
          lineHeight="full"
          bgImage={gradient}
        bgSize="300% 100%"
          bgClip="text"
          textColor="transparent"
          animation={gradientFlowAnimation}
        >
          {name}
        </Heading>
        {displayAcrostic(tagline)}
      </VStack>
    );
  }

  function displayAvatar() {
    return (
      <Image
        src="/images/profile.png"
        alt="Kevin's Profile"
        padding={{
          base: "0.4rem",
          sm: "0.5rem",
          md: "0.6rem",
          lg: "0.7rem",
          xl: "0.8rem",
          "2xl": "1rem",
        }}
        boxSize={{
          base: "14rem",
          sm: "16rem",
          md: "18rem",
          lg: "20rem",
          xl: "22rem",
          "2xl": "24rem",
        }}
        objectFit="cover"
        borderRadius="full"
        bgGradient={gradient}
        bgSize="300% 100%"
        animation={gradientFlowAnimation}
      />
    );
  }

  function displayProfile() {
    if (isMobile) {
      return (
        <VStack
          height="60vh"
          minHeight={{
            base: "md",
            sm: "lg",
            md: "xl",
          }}
          paddingY={{
            base: "1rem",
            sm: "1.5rem",
            md: "2rem",
            lg: "2.5rem"
          }}
          justifyContent="space-evenly"
          zIndex="docked"
        >
          {displayAvatar()}
          {displayFullAcrostic()}
        </VStack>
      );
    } else {
      return (
        <HStack
          width={{
            lg: "3xl",
            xl: "4xl",
            "2xl": "5xl",
          }}
          justify="space-between"
          zIndex="docked"
        >
          {displayFullAcrostic()}
          {displayAvatar()}
        </HStack>
      );
    }
  }

  return (
    <HStack
      position="relative"
      width="full"
      height="70vh"
      minHeight={{
        base: "lg",
        md: "xl",
        lg: "38rem",
      }}
      justifyContent="center"
    >
      <MainFrame gradient={gradient} animation={gradientFlowAnimation}/>
      {displayProfile()}
    </HStack>
  );
}
