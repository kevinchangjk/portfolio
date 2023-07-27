import Navbar from "@/components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { NextRouter } from "next/router";
import {
  ENTRY_DELAY,
  footerVariants,
  navBarVariants,
  pageVariants,
} from "@/utils/motion";
import { useAppContext } from "@/context/state";

export default function Layout({
  router,
  children,
}: {
  router: NextRouter;
  children: React.ReactNode;
}) {
  const { isEntryComplete, completeEntry } = useAppContext();

  return (
    <Box
      padding="2rem 8rem 2rem 8rem"
      backgroundColor={useColorModeValue("gray.9", "gray.0")}
      alignItems="center"
      overflowX="hidden"
    >
      <motion.div
        initial="barInitial"
        animate="barAnimate"
        variants={navBarVariants}
        transition={{
          type: "spring",
          duration: 1,
          bounce: 0.2,
          delay: ENTRY_DELAY,
        }}
        onAnimationComplete={completeEntry}
      >
        <Navbar />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={isEntryComplete ? "pageInitial" : "pageOriginal"}
          animate="pageAnimate"
          exit="pageExit"
          variants={pageVariants}
          transition={{
            type: "spring",
            duration: isEntryComplete ? 0.3 : ENTRY_DELAY,
            bounce: 0.25,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial="footerInitial"
        animate="footerAnimate"
        variants={footerVariants}
        transition={{
          type: "spring",
          duration: 1,
          bounce: 0.2,
          delay: ENTRY_DELAY,
        }}
      >
        <Footer />
      </motion.div>
    </Box>
  );
}
