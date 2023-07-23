import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function PrimaryLink({
  route,
  children,
}: {
  route: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      variant="unstyled"
      as={NextLink}
      href={route}
      key={route}
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
        backgroundColor: useColorModeValue("gray.3", "gray.4"),
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
