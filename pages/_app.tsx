import Layout from "@/components/Layout";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/dm-sans";
import "@fontsource/poppins";
import { AppWrapper } from "@/context/state";
import { NextRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "kevinchangjk",
  description: "Digital Portfolio of Software Developer, Kevin Chang.",
};

export default function Application({
  Component,
  pageProps,
  router,
}: {
  Component: React.FC;
  pageProps: {};
  router: NextRouter;
}) {
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

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Digital Portfolio of Software Developer, Kevin Chang."
          key="desc"
        />
        <meta content="en_US" property="og:locale" />
        <meta content="kevinchangjk" property="og:site_name" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta property="og:type" content="website" />
      </Head>
      <AppWrapper>
        <ColorModeScript
          initialColorMode={theme.colorConfig.initialColorMode}
        />
        <Layout>
          <AnimatePresence mode="wait">
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
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </AppWrapper>
    </ChakraProvider>
  );
}
