import { Tech } from "@/utils/types";
import { Image, Link } from "@chakra-ui/react";

export default function TechStackCell({ techData }: { techData: Tech }) {
  const { name, imageUrl, sourceUrl } = techData;

  return (
    <Link
      width="fit-content"
      height="fit-content"
      href={sourceUrl}
      key={`${name}-techStack`}
    >
      <Image src={imageUrl} boxSize="8rem" fit="contain" />
    </Link>
  );
}
