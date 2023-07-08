import { Image, Link } from "@chakra-ui/react";

export default function TechStackCell({
  imageUrl,
  sourceUrl,
}: {
  imageUrl: string;
  sourceUrl: string;
}) {
  return (
    <Link width="fit-content" height="fit-content" href={sourceUrl}>
      <Image src={imageUrl} boxSize="8rem" fit="contain" />
    </Link>
  );
}
