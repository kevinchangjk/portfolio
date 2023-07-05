import Profile from "@/components/Profile";
import styled from "@emotion/styled";

const Main = styled.div`
  margin-top: 16rem;
`;

export default function Home() {
  return (
    <Main>
      <Profile />
    </Main>
  );
}
