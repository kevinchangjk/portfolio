import Navbar from "@/components/Navbar";
import { styled } from "styled-components";
import theme from "../styles/theme";

const Main = styled.div`
  padding: 2rem 8rem 2rem 8rem;
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
