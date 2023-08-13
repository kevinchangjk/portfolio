import Layout from "@/components/Layout";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { AppWrapper } from "@/context/state";
import { NextRouter } from "next/router";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
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

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Digital Portfolio of Kevin Chang, a Software Developer"
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
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </AppWrapper>
    </ChakraProvider>
  );
}
