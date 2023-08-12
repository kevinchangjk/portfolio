import { Project } from "@/utils/types";
import {
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import projects from "@/data/projects.json";
import { useAppContext } from "@/context/state";
import { useEffect, useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

export default function ProjectPage({ project }: { project: Project }) {
  const { enroute } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(project);
    if (!project) {
      enroute("/404", { scroll: true });
    } else {
      setIsLoading(false);
    }
  }, [project]);

  // hooked values
  const tagTextColor = useColorModeValue("gray.2", "gray.5");
  const buttonTextColor = useColorModeValue("gray.8", "gray.1");
  const buttonBgColor = useColorModeValue("gray.2", "gray.7");

  function ProjectOverview() {
    function displayParagraphs(title: string, text: string[]) {
      const allParagraphs = [];
      for (let i = 0; i < text.length; i++) {
        const key = `${title}-overview-${i}`;
        const newPara = (
          <Text
            variant="paragraph"
            key={key}
            fontSize={{
              base: "md",
              md: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
          >
            {text[i]}
          </Text>
        );
        allParagraphs.push(newPara);
      }

      return allParagraphs;
    }

    return (
      <VStack
        spacing={{
          base: "1rem",
          md: "1.25rem",
          xl: "1.5rem",
          "2xl": "1.75rem",
        }}
      >
        {displayParagraphs(project.title, project.overview)}
      </VStack>
    );
  }

  function ProjectStack() {
    function displayTechStack(title: string, techStack: string[]) {
      const allTech = [];
      for (let i = 0; i < techStack.length; i++) {
        const key = `${title}-techStack-${i}`;
        const newTech = (
          <WrapItem key={key}>
            <Tag
              paddingX={{
                base: "0.5rem",
                md: "0.75rem",
                xl: "1rem",
                "2xl": "1.25rem",
              }}
              paddingY={{
                base: "0.25rem",
                md: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
              }}
              variant="outline"
              opacity={0.9}
            >
              <Text
                textAlign="center"
                textColor={tagTextColor}
                fontWeight="bold"
                letterSpacing={{
                  base: "normal",
                  md: "wide",
                }}
                fontSize={{
                  base: "md",
                  md: "lg",
                  xl: "xl",
                  "2xl": "2xl",
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
      <Wrap
        spacing={{
          base: "0.5rem",
          md: "1rem",
          xl: "1.5rem",
          "2xl": "2rem",
        }}
      >
        {displayTechStack(project.title, project.techStack)}
      </Wrap>
    );
  }

  function ExternalLinks() {
    if (project.sourceUrl || project.previewUrl) {
      return (
        <VStack
          align="inherit"
          spacing={{
            base: "1rem",
            md: "1.5rem",
            xl: "2rem",
            "2xl": "2.5rem",
          }}
        >
          <Heading variant="subPrimary">Sources (External Links)</Heading>
          <HStack
            spacing={{
              base: "1rem",
              md: "1.25rem",
              xl: "1.5rem",
              "2xl": "1.75rem",
            }}
          >
            {project.previewUrl && (
              <Button
                as={LinkBox}
                variant="unstyled"
                width="max"
                height="min"
                bg={buttonBgColor}
                opacity={0.9}
                _hover={{
                  transform: "scale(1.05)",
                  opacity: 1,
                }}
                _active={{
                  transform: "scale(0.95)",
                  opacity: 0.8,
                }}
              >
                <LinkOverlay href={project.previewUrl}>
                  <HStack
                    paddingX={{
                      base: "0.5rem",
                      md: "1rem",
                      xl: "1.5rem",
                      "2xl": "2rem",
                    }}
                    paddingY={{
                      base: "0.25rem",
                      md: "0.5rem",
                      xl: "0.75rem",
                      "2xl": "1rem",
                    }}
                  >
                    <ExternalLinkIcon
                      boxSize={{
                        base: "1rem",
                        md: "1.25rem",
                        xl: "1.5rem",
                        "2xl": "1.75rem",
                      }}
                      color={buttonTextColor}
                    />
                    <Text
                      fontWeight="bold"
                      letterSpacing={{
                        base: "normal",
                        md: "wide",
                      }}
                      fontSize={{
                        base: "md",
                        md: "lg",
                        xl: "xl",
                        "2xl": "2xl",
                      }}
                      textColor={buttonTextColor}
                    >
                      Project Preview
                    </Text>
                  </HStack>
                </LinkOverlay>
              </Button>
            )}
            {project.sourceUrl && (
              <Button
                as={LinkBox}
                variant="unstyled"
                width="max"
                height="min"
                bg={buttonBgColor}
                opacity={0.9}
                _hover={{
                  transform: "scale(1.05)",
                  opacity: 1,
                }}
                _active={{
                  transform: "scale(0.95)",
                  opacity: 0.8,
                }}
              >
                <LinkOverlay href={project.sourceUrl}>
                  <HStack
                    paddingX={{
                      base: "0.5rem",
                      md: "1rem",
                      xl: "1.5rem",
                      "2xl": "2rem",
                    }}
                    paddingY={{
                      base: "0.25rem",
                      md: "0.5rem",
                      xl: "0.75rem",
                      "2xl": "1rem",
                    }}
                  >
                    <Icon
                      as={FaGithub}
                      boxSize={{
                        base: "1rem",
                        md: "1.25rem",
                        xl: "1.5rem",
                        "2xl": "1.75rem",
                      }}
                      color={buttonTextColor}
                    />
                    <Text
                      fontWeight="bold"
                      letterSpacing={{
                        base: "normal",
                        md: "wide",
                      }}
                      fontSize={{
                        base: "md",
                        md: "lg",
                        xl: "xl",
                        "2xl": "2xl",
                      }}
                      textColor={buttonTextColor}
                    >
                      Source Code
                    </Text>
                  </HStack>
                </LinkOverlay>
              </Button>
            )}
          </HStack>
        </VStack>
      );
    } else {
      return null;
    }
  }

  if (isLoading) {
    return <></>;
  } else {
    return (
      <main>
        <VStack
          marginTop={{
            base: "6vh",
            md: "12vh",
            xl: "16vh",
            "2xl": "20vh",
          }}
          spacing={{
            base: "2rem",
            md: "3rem",
            xl: "4rem",
            "2xl": "5rem",
          }}
          width={{
            base: "full",
            md: "2xl",
            xl: "4xl",
            "2xl": "5xl",
          }}
          align="left"
        >
          <VStack
            align="inherit"
            spacing={{
              base: "1rem",
              md: "1.5rem",
              xl: "2rem",
              "2xl": "2.5rem",
            }}
          >
            <Heading variant="primary">{project.title}</Heading>
            <Text
              variant="descriptor"
              fontSize={{
                base: "lg",
                md: "xl",
                xl: "2xl",
                "2xl": "3xl",
              }}
            >
              {project.description}
            </Text>
          </VStack>
          <Image
            src={project.imageUrl}
            rounded="lg"
            maxWidth="full"
            fit="cover"
            boxShadow="2xl"
          />
          <VStack
            align="inherit"
            spacing={{
              base: "1rem",
              md: "1.5rem",
              xl: "2rem",
              "2xl": "2.5rem",
            }}
          >
            <Heading variant="subPrimary">Overview</Heading>
            <ProjectOverview />
          </VStack>
          <VStack
            align="inherit"
            spacing={{
              base: "1rem",
              md: "1.5rem",
              xl: "2rem",
              "2xl": "2.5rem",
            }}
          >
            <Heading variant="subPrimary">Tech Stack</Heading>
            <ProjectStack />
          </VStack>
          <ExternalLinks />
        </VStack>
      </main>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;
  if (typeof name !== "string") {
    return { props: {} };
  }

  let project: Project | null = null;
  for (const projectData of projects) {
    if (name === projectData.name) {
      project = projectData;
    }
  }

  const props = {
    project,
  };

  return { props };
};
