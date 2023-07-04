import Navbar from "@/components/Navbar";
import { styled } from "styled-components";

const Main = styled.div`
  padding: 4rem;
  background-color: #191919;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Main>
      <Navbar />
      <main>{children}</main>
    </Main>
  );
}
