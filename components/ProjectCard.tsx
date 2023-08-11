import { Project } from "@/utils/types";
import { LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import PrimaryLink from "./PrimaryLink";

export default function ProjectCard({ projectData }: { projectData: Project }) {
  const { title, description, imageUrl, techStack, sourceUrl, previewUrl } =
    projectData;
  const { colorMode } = useColorMode();
  return (
    <Card
      width={{
        base: "16rem",
        md: "18rem",
        xl: "20rem",
        "2xl": "24rem",
      }}
      height={{
        base: "24rem",
        md: "27rem",
        xl: "30rem",
        "2xl": "35rem",
      }}
      bgColor={colorMode === "light" ? "white" : "gray.1"}
      borderRadius="0.5rem"
      borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
      borderWidth="thin"
      boxShadow="2xl"
    >
      <Image
        src={imageUrl}
        alt="Project Thumbnail"
        width="full"
        height={{
          base: "11rem",
          md: "12rem",
          xl: "13rem",
          "2xl": "15rem",
        }}
        fit="cover"
        borderTopRadius="0.5rem"
        borderBottomWidth="0.5px"
        borderBottomStyle="solid"
        borderBottomColor={colorMode === "light" ? "gray.3" : "gray.5"}
        marginBottom={{
          base: "0.5rem",
          md: "0.75rem",
          xl: "1rem",
          "2xl": "1.5rem",
        }}
      />
      <CardHeader
        marginTop="0rem"
        marginBottom={{
          base: "0.5rem",
          md: "0.75rem",
          xl: "1rem",
          "2xl": "1.5rem",
        }}
        marginX="0rem"
        paddingY="0rem"
        paddingX={{
          base: "0.5rem",
          md: "0.75rem",
          xl: "1rem",
          "2xl": "1.25rem",
        }}
      >
        <Heading variant="card">{title}</Heading>
      </CardHeader>
      <CardBody
        marginTop="0rem"
        marginBottom={{
          base: "0.5rem",
          md: "0.75rem",
          xl: "1rem",
          "2xl": "1.5rem",
        }}
        marginX="0rem"
        paddingY="0rem"
        paddingX={{
          base: "0.5rem",
          md: "0.75rem",
          xl: "1rem",
          "2xl": "1.25rem",
        }}
      >
        <Text
          variant="paragraph"
          fontSize={{
            base: "sm",
            md: "md",
            xl: "lg",
            "2xl": "xl",
          }}
        >
          {description}
        </Text>
      </CardBody>
      <CardFooter
        margin="0rem"
        padding={{
          base: "0.5rem",
          md: "0.75rem",
          xl: "1rem",
          "2xl": "1.25rem",
        }}
      >
        <VStack width="full" margin="0rem" padding="0rem">
          <HStack width="full" alignItems="end">
            <Text
              variant="detail"
              fontSize={{
                base: "xs",
                md: "sm",
                xl: "md",
                "2xl": "lg",
              }}
            >
              Tech Stack:{" "}
            </Text>
            <Text
              variant="detail"
              fontSize={{
                base: "xs",
                md: "sm",
                xl: "md",
                "2xl": "lg",
              }}
            >
              {techStack}
            </Text>
          </HStack>
          <Divider variant="secondary" />
          <HStack width="full">
            <Box width="50%">
              {previewUrl && (
                <PrimaryLink
                  href={previewUrl}
                  color={colorMode === "light" ? "gray.3" : "gray.5"}
                  thickness="px"
                >
                  <HStack>
                    <LinkIcon
                      boxSize={{
                        base: "12px",
                        md: "16px",
                        xl: "20px",
                        "2xl": "24px",
                      }}
                      color={colorMode === "light" ? "gray.3" : "gray.5"}
                    />
                    <Text
                      variant="detail"
                      fontSize={{
                        base: "xs",
                        md: "sm",
                        xl: "md",
                        "2xl": "lg",
                      }}
                    >
                      Live Preview
                    </Text>
                  </HStack>
                </PrimaryLink>
              )}
            </Box>
            <Box width="50%">
              {sourceUrl && (
                <PrimaryLink
                  href={sourceUrl}
                  color={colorMode === "light" ? "gray.3" : "gray.5"}
                  thickness="px"
                >
                  <HStack>
                    <Image
                      src={
                        colorMode === "light"
                          ? "/images/social-media/github-light.svg"
                          : "/images/social-media/github-dark.svg"
                      }
                      alt="Github Icon"
                      boxSize={{
                        base: "12px",
                        md: "16px",
                        xl: "20px",
                        "2xl": "24px",
                      }}
                    />
                    <Text
                      variant="detail"
                      fontSize={{
                        base: "xs",
                        md: "sm",
                        xl: "md",
                        "2xl": "lg",
                      }}
                    >
                      Source Code
                    </Text>
                  </HStack>
                </PrimaryLink>
              )}
            </Box>
          </HStack>
        </VStack>
      </CardFooter>
    </Card>
  );
}
