import Introduction from "@/components/Introduction";
import Profile from "@/components/Profile";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <VStack marginTop="4rem" spacing="16rem">
        <Profile />
        <Introduction />
      </VStack>
    </main>
  );
}
