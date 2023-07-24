import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function PrimaryLink({
  href,
  color,
  children,
  thickness,
}: {
  href: string;
  color: string;
  children: React.ReactNode;
  thickness: string;
}) {
  return (
    <Link
      variant="unstyled"
      as={NextLink}
      href={href}
      key={href}
      isExternal
      display="inline-block"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: thickness,
        bottom: 0,
        left: 0,
        backgroundColor: color,
        transition: "transform 0.2s ease",
      }}
      _hover={{
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "center",
        },
      }}
    >
      {children}
    </Link>
  );
}
