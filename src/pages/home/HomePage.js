import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/posts/Posts";
import Header from "../../components/header/Header";
import Profile from "../../components/profile/Profile";
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <Wrap>
        <Navbar />
        <Main>
          <Header />
          <Posts />
        </Main>
        <Profile />
      </Wrap>
    </>
  );
}

export default HomePage;

const Wrap = styled.div`
  display: flex;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  padding: 0px;
  padding-bottom: 10px;
  /* overflow: auto; */
  max-height: 100vh;
  /* background-color: gray; */
  background-color: black;
`;
