import styled from "styled-components";

const Post = () => {
  return (
    <Main>
      <Button>Post</Button>
    </Main>
  );
};

export default Post;

const Main = styled.div``;
const Button = styled.button`
  height: 40px;
  width: 130px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  border: 2px solid white;
  background: rgb(30, 30, 30);
  border-radius: 20px;
  :hover {
    background: linear-gradient(to right, #eb3398, #f85d3e);
  }
`;
