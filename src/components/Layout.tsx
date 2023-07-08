import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box padding="2rem 8rem 2rem 8rem" backgroundColor="gray.0" alignItems="center">
      <Navbar />
      {children}
    </Box>
  );
}
