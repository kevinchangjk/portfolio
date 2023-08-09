import Navbar from "@/components/Navbar";
import {
  Box,
  Center,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
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
    <HStack
      width="full"
      backgroundColor={useColorModeValue("gray.9", "gray.0")}
      overflowX="hidden"
      justifyContent="center"
    >
      <VStack
        alignItems="center"
        width={{
          base: "90vw",
          md: "85vw",
          xl: "80vw",
          "2xl": "7xl",
        }}
        paddingY={{
          base: "1rem",
          md: "1.5rem",
          xl: "2rem",
          "2xl": "3rem",
        }}
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
          style={{ width: "inherit" }}
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
            style={{ width: "inherit" }}
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
          style={{ width: "inherit" }}
        >
          <Footer />
        </motion.div>
      </VStack>
    </HStack>
  );
}
