import Profile from "@/components/Profile";
import TechStackSummary from "@/components/TechStackSummary";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <VStack marginTop="16rem">
        <Profile />
        <TechStackSummary />
      </VStack>
    </main>
  );
}
