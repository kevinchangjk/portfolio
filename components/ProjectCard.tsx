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
  useColorModeValue,
} from "@chakra-ui/react";
import PrimaryLink from "./PrimaryLink";

export default function ProjectCard({ projectData }: { projectData: Project }) {
  const { title, description, imageUrl, techStack, sourceUrl, previewUrl } =
    projectData;
  return (
    <Card
      width="20rem"
      height="30rem"
      bgColor={useColorModeValue("white", "gray.1")}
      borderRadius="0.5rem"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      borderWidth="thin"
      boxShadow="2xl"
    >
      <Image
        src={imageUrl}
        width="full"
        height="13rem"
        fit="cover"
        borderTopRadius="0.5rem"
        borderBottomWidth="0.5px"
        borderBottomStyle="solid"
        borderBottomColor={useColorModeValue("gray.3", "gray.5")}
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
                  color={useColorModeValue("gray.3", "gray.5")}
                  thickness="px"
                >
                  <HStack>
                    <LinkIcon
                      boxSize="20px"
                      color={useColorModeValue("gray.3", "gray.5")}
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
                  color={useColorModeValue("gray.3", "gray.5")}
                  thickness="px"
                >
                  <HStack>
                    <Image
                      src={useColorModeValue(
                        "/images/social-media/github-light.svg",
                        "/images/social-media/github-dark.svg"
                      )}
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
