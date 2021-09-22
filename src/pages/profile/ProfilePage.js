import { style } from "dom-helpers";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Post from "../../components/single/Post";
import Profile from "../../components/single/Profile";

const ProfilePage = () => {
  return (
    <Background>
      <Wrap>
        <Profile />
        <Break />
        <Posts>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Posts>
      </Wrap>
    </Background>
  );
};

export default ProfilePage;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgb(15, 15, 17);
  text-align: center;

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: black;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgb(50, 50, 50);
    border-radius: 5px;
    margin-top: 50px;
  }
`;

const Wrap = styled.div`
  max-width: 1000px;
  margin: auto;
  padding-bottom: 100px;
  height: 92%;
  color: white;
`;

const Break = styled.hr`
  border: none;
  content: "Posts";
  width: 95%;
  border-top: 3px solid gray;
  margin: auto;
  margin-bottom: 30px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
  max-width: 1000px;
  grid-auto-columns: minmax(320px, 40%);
  margin: auto;
  justify-content: center;
  @media (max-width: 1050px) {
    gap: 25px;
    grid-template-columns: repeat(2, 45%);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 85%);
  }
`;
