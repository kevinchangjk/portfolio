import Profile from "@/components/Profile";
import ProjectSummary from "@/components/ProjectSummary";
import TechStackSummary from "@/components/TechStackSummary";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <VStack marginTop="16rem">
        <Profile />
        <TechStackSummary />
        <ProjectSummary />
      </VStack>
    </main>
  );
}
