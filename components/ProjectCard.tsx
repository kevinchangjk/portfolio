import { Project } from "@/utils/types";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { useAppContext } from "@/context/state";
import { useEffect, useState } from "react";

export default function ProjectCard({ projectData }: { projectData: Project }) {
  const { title, name, description, imageUrl, techStack } = projectData;
  const { colorMode } = useColorMode();
  const { enroute } = useAppContext();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }, []);

  function onClickHandler(name: string) {
    const path = `/projects/${name}`;
    enroute(path, { scroll: true });
  }

  function displayTechStack(title: string, techStack: string[]) {
    const allTech = [];
    const limit = Math.min(3, techStack.length);
    for (let i = 0; i < limit; i++) {
      const key = `${title}-tech-${i}`;
      const newTech = (
        <WrapItem key={key}>
          <Tag
            padding={{
              base: "0.3rem",
              md: "0.5rem",
              xl: "0.8rem",
              "2xl": "1rem",
            }}
            variant="solid"
            colorScheme="whiteAlpha"
            opacity={0.8}
          >
            <Text
              textAlign="center"
              fontWeight="bold"
              letterSpacing={{
                base: "normal",
                md: "wide",
              }}
              fontSize={{
                base: "sm",
                md: "md",
                xl: "lg",
                "2xl": "xl",
              }}
            >
              {techStack[i]}
            </Text>
          </Tag>
        </WrapItem>
      );
      allTech.push(newTech);
    }

    return allTech;
  }

  return (
    <Card
      position="relative"
      width="max"
      maxWidth="full"
      rounded="lg"
      borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
      borderWidth="thin"
      boxShadow="2xl"
    >
      <Button
        variant="unstyled"
        width="full"
        height="full"
        onClick={() => onClickHandler(name)}
      >
        <Image
          src={imageUrl}
          alt="Project Thumbnail"
          width={{
            base: "lg",
            sm: "xl",
            md: "2xl",
            lg: "3xl",
            xl: "4xl",
            "2xl": "5xl",
          }}
          height="max"
          minHeight="xs"
          fit="cover"
          rounded="inherit"
        />
        <CardBody
          position="absolute"
          top={0}
          left={0}
          width="full"
          height="full"
          display="flex"
          flexDirection="column"
          justifyContent="end"
          rounded="inherit"
          bgGradient="linear(to-b, blackAlpha.100, blackAlpha.700)"
          opacity={isDesktop ? 0 : 1}
          _hover={{
            opacity: 1,
          }}
          transition="opacity 0.3s ease-in-out"
        >
          <VStack
            paddingY={{
              base: "1rem",
              md: "1.5rem",
              xl: "2rem",
              "2xl": "2.5rem",
            }}
            spacing={{
              base: "0.5rem",
              md: "1rem",
              xl: "1.5rem",
              "2xl": "2rem",
            }}
            alignItems="center"
          >
            <Heading
              fontSize={{
                base: "16px",
                md: "24px",
                xl: "32px",
                "2xl": "40px",
              }}
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="normal"
              textColor="gray.8"
            >
              {title}
            </Heading>
            <Text
              fontSize={{
                base: "md",
                md: "lg",
                xl: "xl",
                "2xl": "2xl",
              }}
              letterSpacing="normal"
              textAlign="center"
              overflowWrap="break-word"
              whiteSpace="normal"
              fontWeight="medium"
              textColor="gray.7"
            >
              {description}
            </Text>
            <Wrap
              spacing={{
                base: "0.5rem",
                md: "0.75rem",
                xl: "1rem",
                "2xl": "1.25rem",
              }}
            >
              {displayTechStack(title, techStack)}
            </Wrap>
          </VStack>
        </CardBody>
      </Button>
    </Card>
  );
}
