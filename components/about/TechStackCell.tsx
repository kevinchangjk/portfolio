import { Tech } from "@/utils/types";
import { Image, Link } from "@chakra-ui/react";

export default function TechStackCell({ techData }: { techData: Tech }) {
  const { imageUrl, sourceUrl } = techData;

  return (
    <Link
      width="fit-content"
      height="fit-content"
      href={sourceUrl}
      _hover={{
        transform: "scale(1.1)",
      }}
      _active={{
        transform: "scale(0.9)",
      }}
    >
      <Image
        src={imageUrl}
        alt="Tech Logo"
        boxSize={{
          base: "4rem",
          md: "6rem",
          xl: "8rem",
          "2xl": "10rem",
        }}
        fit="contain"
      />
    </Link>
  );
}
