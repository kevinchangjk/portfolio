import Introduction from "@/components/Introduction";
import Profile from "@/components/Profile";
import { VStack, keyframes } from "@chakra-ui/react";

const shift = keyframes`
    from {
      background-position: 100% 50%;
    }
    to {
      background-position: 0% 50%;
    }
  `;

const gradientFlowAnimation = `${shift} 5s linear infinite`;

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
        <Profile animation={gradientFlowAnimation}/>
        <Introduction animation={gradientFlowAnimation}/>
      </VStack>
    </main>
  );
}
