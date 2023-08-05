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
      width="20rem"
      height="30rem"
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
        height="13rem"
        fit="cover"
        borderTopRadius="0.5rem"
        borderBottomWidth="0.5px"
        borderBottomStyle="solid"
        borderBottomColor={colorMode === "light" ? "gray.3" : "gray.5"}
        marginBottom="1rem"
      />
      <CardHeader
        marginTop="0rem"
        marginBottom="1rem"
        marginX="0rem"
        paddingY="0rem"
        paddingX="1rem"
      >
        <Heading variant="card">{title}</Heading>
      </CardHeader>
      <CardBody
        marginTop="0rem"
        marginBottom="1rem"
        marginX="0rem"
        paddingY="0rem"
        paddingX="1rem"
      >
        <Text variant="paragraph" fontSize="lg">
          {description}
        </Text>
      </CardBody>
      <CardFooter margin="0rem" padding="1rem">
        <VStack width="full" margin="0rem" padding="0rem">
          <HStack width="full" alignItems="end">
            <Text variant="detail">Tech Stack: </Text>
            <Text variant="detail">{techStack}</Text>
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
                      boxSize="20px"
                      color={colorMode === "light" ? "gray.3" : "gray.5"}
                    />
                    <Text variant="detail">Live Preview</Text>
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
                      boxSize="20px"
                    />
                    <Text variant="detail">Source Code</Text>
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
