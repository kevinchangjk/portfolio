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
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ProjectCard({ projectData }: { projectData: Project }) {
  const { title, description, imageUrl, techStack, sourceUrl, previewUrl } =
    projectData;
  return (
    <Card width="20rem" height="30rem" bgColor="gray.1" borderRadius="0.5rem" borderColor="gray.700" borderWidth="thin" >
      <Image
        src={imageUrl}
        width="full"
        height="13rem"
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
        <Text variant="paragraph" fontSize="lg">{description}</Text>
      </CardBody>
      <CardFooter margin="0rem" padding="1rem">
        <VStack width="full" margin="0rem" padding="0rem">
          <HStack width="full" alignItems="end">
            <Text variant="detail">Tech Stack: </Text>
            <Text variant="detail">{techStack}</Text>
          </HStack>
          <Divider variant="secondary"/>
          <HStack width="full">
            <Box width="50%">
              <Link href={previewUrl}>
                <HStack>
                  <LinkIcon boxSize="20px" color="#CCCCCC"/>
                  <Text>Live Preview</Text>
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
                  <Text>Source Code</Text>
                </HStack>
              </Link>
            </Box>
          </HStack>
        </VStack>
      </CardFooter>
    </Card>
  );
}
