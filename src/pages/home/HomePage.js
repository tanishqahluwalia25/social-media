import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/posts/Posts";
import Header from "../../components/header/Header";
import Profile from "../../components/profile/Profile";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import ProfilePage from "../profile/ProfilePage";

function HomePage() {
  return (
    <>
      <Wrap>
        <Switch>
          <Main>
            <Header />
            <Route exact path="" component={Posts} />
            <Route exact path="/home/profile" component={ProfilePage} />
          </Main>
        </Switch>
        <Show>
          <Profile />
        </Show>
        <Navbar />
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
  // max-width: 1000px;
  padding: 0px;
  padding-bottom: 10px;
  /* overflow: auto; */
  max-height: 100vh;
  /* background-color: gray; */
  background-color: black;
`;
const Show = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`;
