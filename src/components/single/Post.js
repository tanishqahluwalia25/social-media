import styled from "styled-components";
import AvatarInfo from "./AvatarInfo";
import PostInfo from "./PostInfo";

const Post = () => {
  return (
    <Card>
      <AvatarInfo />
      <PostImg
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Profile"
      />
      <PostInfo />
    </Card>
  );
};

export default Post;

const Card = styled.div`
  height: auto;
  width: auto;
  max-width: 500px;
  background: black;
  display: inline-block;
  border-radius: 25px;
  margin: auto;
`;

const PostImg = styled.img`
  max-width: 100%;
  margin: 0px;
`;
