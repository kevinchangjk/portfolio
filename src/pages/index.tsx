import Profile from "@/components/Profile";
import { styled } from "styled-components";

const Main = styled.div`
  margin-top: 2rem;
`;

export default function Home() {
  return (
    <Main>
      <Profile />
    </Main>
  );
}
