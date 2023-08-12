import Introduction from "@/components/Introduction";
import Profile from "@/components/Profile";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <VStack
        marginTop={{
          base: "4vh",
          md: "8vh",
          xl: "10vh",
          "2xl": "16vh",
        }}
        spacing={{
          base: "4rem",
          md: "8rem",
          xl: "12rem",
          "2xl": "16rem",
        }}
      >
        <Profile />
        <Introduction />
      </VStack>
    </main>
  );
}
