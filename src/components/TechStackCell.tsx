import { Image, Link } from "@chakra-ui/react";

export default function TechStackCell({
  techName,
  imageUrl,
  sourceUrl,
}: {
  techName: string;
  imageUrl: string;
  sourceUrl: string;
}) {
  return (
    <Link width="fit-content" height="fit-content" href={sourceUrl} key={`${techName}-techStack`}>
      <Image src={imageUrl} boxSize="8rem" fit="contain" />
    </Link>
  );
}
