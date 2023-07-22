import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/dm-sans";
import "@fontsource/poppins";
import { AppWrapper } from "@/context/state";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Application({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: {};
}) {
  return (
    <ChakraProvider theme={theme}>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </ChakraProvider>
  );
}
