import Navbar from "@/components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <Box
      padding="2rem 8rem 2rem 8rem"
      backgroundColor={useColorModeValue("white", "gray.0")}
      alignItems="center"
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
