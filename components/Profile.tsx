import {
  HStack,
  Heading,
  Image,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import profile from "@/data/profile.json";
import MainFrame from "./MainFrame";
import { getGradient } from "@/utils/gradient";
import { useAppContext } from "@/context/state";

const { name, tagline } = profile;

export default function Profile() {
  const [isMobile] = useMediaQuery("(max-width: 1090px)");

  function displayAcrostic(acrostic: string[]) {
    const result = [];
    for (const line of acrostic) {
      const newLine = (
        <Heading key={`acrostic${line}`} variant="primary">
          {line}
        </Heading>
      );
      result.push(newLine);
    }

    return result;
  }

  function displayProfile() {
    if (isMobile) {
      return (
        <VStack
          width={{
            base: "2xl",
            sm: "3xl",
          }}
          height="60vh"
          minHeight={{
            base: "md",
            sm: "lg",
            md: "xl",
          }}
          justifyContent="space-evenly"
          zIndex="sticky"
        >
          <Image
            src="/images/profile.png"
            alt="Kevin's Profile"
            padding={{
              base: "0.4rem",
              sm: "0.5rem",
              md: "0.6rem",
              lg: "0.7rem",
            }}
            boxSize={{
              base: "14rem",
              sm: "16rem",
              md: "18rem",
              lg: "20rem",
            }}
            objectFit="cover"
            borderRadius="full"
            bgGradient={gradient}
          />
          <VStack align="start" spacing="0">
            <Heading
              width="full"
              fontSize={{
                base: "32px",
                sm: "40px",
                md: "48px",
                lg: "56px",
              }}
              lineHeight="full"
              background={gradient}
              backgroundClip="text"
              textColor="transparent"
              style={{
                transition: "background 3s ease",
              }}
            >
              {name}
            </Heading>
            {displayAcrostic(tagline)}
          </VStack>
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
          zIndex="9"
        >
          <VStack align="start" spacing="0">
            <Heading
              width="full"
              fontSize={{
                lg: "56px",
                xl: "64px",
                "2xl": "72px",
              }}
              lineHeight="full"
              background={gradient}
              backgroundClip="text"
              textColor="transparent"
              style={{
                transition: "background 3s ease",
              }}
            >
              {name}
            </Heading>
            {displayAcrostic(tagline)}
          </VStack>
          <Image
            src="/images/profile.png"
            alt="Kevin's Profile"
            padding={{
              lg: "0.7rem",
              xl: "0.8rem",
              "2xl": "1rem",
            }}
            boxSize={{
              lg: "20rem",
              xl: "22rem",
              "2xl": "24rem",
            }}
            objectFit="cover"
            borderRadius="full"
            bgGradient={gradient}
          />
        </HStack>
      );
    }
  }
  const { gradientTheme } = useAppContext();
  const gradient = getGradient(gradientTheme, "to right");

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
      <MainFrame gradient={gradient} />
      {displayProfile()}
    </HStack>
  );
}
