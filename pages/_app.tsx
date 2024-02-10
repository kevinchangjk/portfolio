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
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function Application({
  Component,
  pageProps,
  router,
}: {
  Component: React.FC;
  pageProps: {};
  router: NextRouter;
}) {
  // particles init state
  const [init, setInit] = useState(false);

  // particles setup
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

  // particles options
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
    [],
  );

  if (init) {
    return (
      <ChakraProvider theme={theme}>
        <Head>
          <meta content="en_US" property="og:locale" />
          <meta name="charset" content="UTF-8" />
          <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
          <meta name="google" content="notranslate" key="notranslate" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:site_name" content="kevinchangjk" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="kevinchangjk" />
          <meta
            property="og:description"
            content="Digital Portfolio of Kevin Chang, a Software Developer"
          />
          <meta property="og:image" content="/images/preview.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/images/preview.png" />
          <link rel="icon" href="/images/favicon.ico" sizes="any" />
          <meta name="title" content="kevinchangjk" />
          <meta
            name="description"
            content="Digital Portfolio of Kevin Chang, a Software Developer"
            key="desc"
          />
        </Head>
        <AppWrapper>
          <ColorModeScript
            initialColorMode={theme.colorConfig.initialColorMode}
          />
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
          <Layout router={router}>
            <Component {...pageProps} />
          </Layout>
          <Analytics />
          <SpeedInsights />
        </AppWrapper>
      </ChakraProvider>
    );
  }
}
