import { Project } from "@/utils/types";
import { LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ProjectCard({ projectData }: { projectData: Project }) {
  const { title, description, imageUrl, sourceUrl, previewUrl } = projectData;
  return (
    <Card width="20rem" height="30rem" borderRadius="0.5rem">
      <Image
        src={imageUrl}
        width="full"
        height="14rem"
        fit="cover"
        borderTopRadius="0.5rem"
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
        <Text variant="cardBody">{description}</Text>
      </CardBody>
      <CardFooter margin="0rem" paddingX="1rem">
        <VStack width="full" margin="0rem" padding="0rem">
          <HStack width="full" alignItems="end">
            <Text variant="techStack">Tech Stack: </Text>
            <Text variant="tech">HTML, JavaScript, SASS</Text>
          </HStack>
          <HStack width="full">
            <Box width="50%">
              <Link href={previewUrl}>
                <HStack>
                  <LinkIcon boxSize="20px" />
                  <Text variant="cardFooter">Live Preview</Text>
                </HStack>
              </Link>
            </Box>
            <Box width="50%">
              <Link href={sourceUrl}>
                <HStack>
                  <Image
                    src="/images/social-media/github-dark.svg"
                    boxSize="20px"
                  />
                  <Text variant="cardFooter">Source Code</Text>
                </HStack>
              </Link>
            </Box>
          </HStack>
        </VStack>
      </CardFooter>
    </Card>
  );
}