import styled from "styled-components";
import AddImage from "./AddImage";
import AddCaption from "./AddCaption";
import Post from "./Post";
import Cancel from "./Cancel";

const CreatePost = () => {
  return (
    <Main>
      <Image>
        <AddImage />
      </Image>
      <Add>
        <Caption>
          <AddCaption />
        </Caption>
        <Button>
          <Post />
          <Cancel />
        </Button>
      </Add>
    </Main>
  );
};

export default CreatePost;

const Main = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
`;
const Image = styled.div`
  flex: 6;
  display: flex;
  background: rgb(30, 30, 30);
  justify-content: center;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  border-right: 1px solid black;
`;
const Add = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;
const Caption = styled.div`
  flex: 8;
  display: flex;
  background: rgb(30, 30, 30);
  padding: 50px 20px 20px;
  box-sizing: border-box;
`;
const Button = styled.div`
  flex: 2;
  display: flex;
  background: rgb(30, 30, 30);
  justify-content: space-around;
  align-items: center;
`;
