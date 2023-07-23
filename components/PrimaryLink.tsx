import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function PrimaryLink({
  route,
  color,
  external,
  children,
}: {
  route: string;
  color: string;
  external: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      variant="unstyled"
      as={NextLink}
      href={route}
      key={route}
      isExternal={external}
      display="inline-block"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2px",
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
