import Introduction from "@/components/Introduction";
import Profile from "@/components/Profile";
import { colors } from "@/utils/gradient";
import { VStack, Wrap, WrapItem } from "@chakra-ui/react";

export default function Home() {
  function displayAllColors() {
    const all = [];
    for (const color of colors) {
      all.push(<WrapItem height="6rem" width="6rem" bgColor={color} />);
    }
    return <Wrap>{all}</Wrap>;
  }

  return (
    <main>
      <VStack marginTop="4rem" spacing="12rem">
        <Profile />
        <Introduction />
      </VStack>
    </main>
  );
}
