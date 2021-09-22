import styled from "styled-components";
import Header from "../../components/header/Header";
import Post from "../../components/single/Post";
import Profile from "../../components/single/Profile";

const ProfilePage = () => {
  return (
    <Background>
      <Header />
      <Wrap>
        <Profile />
        <Posts>
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
  background: rgb(15, 15, 17);
  text-align: center;
`;

const Wrap = styled.div`
  max-width: 1000px;
  overflow-y: scroll;
  margin: auto;
  height: 92%;
  color: white;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: none;
    border-radius: 10px;
    margin: 0;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: none;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    /* background: dodgerblue; */
  }
`;

const Posts = styled.div`
  margin: 0 50px;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 15px;
  max-width: 1000px;
  @media (max-width: 1050px) {
    gap: 25px;
    grid-template-columns: repeat(2, 50%);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 100%);
  }
`;
