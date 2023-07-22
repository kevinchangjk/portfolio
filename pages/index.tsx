import Introduction from "@/components/Introduction";
import Profile from "@/components/Profile";
import { useAppContext } from "@/context/state";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  const { gradientTheme, setGradientTheme } = useAppContext();

  return (
    <main>
      <VStack marginTop="4rem" spacing="12rem">
        <Profile gradientTheme={gradientTheme} />
        <Introduction />
      </VStack>
    </main>
  );
}
