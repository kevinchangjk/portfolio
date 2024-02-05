import Navbar from "@/components/Navbar";
import { Box, HStack, VStack, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { NextRouter } from "next/router";
import {
  ENTRY_DELAY,
  PAGE_TRANSITION_DURATION,
  footerVariants,
  navBarVariants,
  pageVariants,
} from "@/utils/motion";
import { useAppContext } from "@/context/state";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function Layout({
  router,
  children,
}: {
  router: NextRouter;
  children: React.ReactNode;
}) {
  const [init, setInit] = useState(false);
  const { isEntryComplete, completeEntry } = useAppContext();

  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      name: "Links",
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
          },
        },
        color: {
          value: "#0000FF",
          animation: {
            enable: true,
            speed: 3,
            sync: true,
          },
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
        links: {
          enable: true,
          distance: 130,
          color: "#666666",
          opacity: 0.25,
          width: 1,
          triangles: {
            enable: true,
            color: "#A7A7A7",
            opacity: 0.05,
          },
        },
        move: {
          enable: true,
          speed: 1,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.8,
            },
          },
          push: {
            quantity: 3,
          },
        },
      },
      background: {
        color: "transparent",
      },
      delay: 1,
    }),
    []
  );

  if (init) {
    return (
      <HStack
        width="full"
        backgroundColor={useColorModeValue("gray.9", "gray.0")}
        overflow="hidden"
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
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
          <AnimatePresence mode="popLayout">
            <motion.div
              key="navbar-motion"
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
            <motion.div
              key={router.route}
              initial={isEntryComplete ? "pageInitial" : "pageOriginal"}
              animate="pageAnimate"
              exit="pageExit"
              variants={pageVariants}
              transition={{
                type: "tween",
                duration: isEntryComplete
                  ? PAGE_TRANSITION_DURATION
                  : ENTRY_DELAY + PAGE_TRANSITION_DURATION,
                ease: isEntryComplete ? "anticipate" : "easeOut",
              }}
              style={{ width: "inherit" }}
            >
              <Box minHeight="55vh">{children}</Box>
            </motion.div>
            <motion.div
              key="footer-motion"
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
          </AnimatePresence>
        </VStack>
      </HStack>
    );
  }
}
