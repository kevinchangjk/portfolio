import Navbar from "@/components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { NextRouter } from "next/router";

export default function Layout({
  router,
  children,
}: {
  router: NextRouter;
  children: React.ReactNode;
}) {
  // Animations
  const pageVariants = {
    pageInitial: {
      opacity: 0,
      x: "80%",
    },
    pageAnimate: {
      opacity: 1,
      x: 0,
    },
    pageExit: {
      opacity: 0,
      x: "-80%",
    },
  };

  const entry = false;

  return (
    <Box
      as={motion.div}
      padding="2rem 8rem 2rem 8rem"
      backgroundColor={useColorModeValue("gray.9", "gray.0")}
      alignItems="center"
      initial={entry ? "pageAnimate" : "pageInitial"}
      animate={entry ? "pageInitial" : "pageAnimate"}
      exit="pageExit"
      variants={pageVariants}
      transition={{
        type: "spring",
        duration: "0.5s",
        bounce: "0.25",
      }}
    >
      <Navbar />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={pageVariants}
        transition={{
          type: "spring",
          duration: 0.5,
          bounce: 0.25,
        }}
      >
        {children}
      </motion.div>
      <Footer />
    </Box>
  );
}
