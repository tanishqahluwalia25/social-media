import "./App.css";
import styled from "styled-components";
import Profile from "./components/profile/Profile"
import { BrowserRouter } from "react-router-dom";
import Posts from "./components/posts/Posts";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Wrap>
          <Navbar></Navbar>
          <Main>
            <Header />
            <Posts />
          </Main>
          <Profile />
        </Wrap>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.05;
  height: 2rem;
  background-color: white;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #dddddd34;
  max-width: 1000px;
  padding: 0px;
  padding-bottom: 10px;
  overflow: auto;
  max-height: 100vh;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(#fd297a, #9424f0);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    /* background: dodgerblue; */
  }
`;

// const Profile = styled.div`
//   flex: 0.3;
// `;
