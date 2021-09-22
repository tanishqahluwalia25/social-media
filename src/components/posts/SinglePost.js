import React from "react";
import styled from "styled-components";
import AvatarInfo from "../single/AvatarInfo";
import PostInfo from "../single/PostInfo";
import Comments from "./Comments";

const SinglePost = () => {
  return (
    <>
      <Main>
        <Left>
          <PostImage
            src={
              "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
          />
        </Left>

        <Right>
          <AvatarInfo />
          <PostInfo />
          <Comments />
        </Right>
      </Main>
    </>
  );
};

export default SinglePost;
const PostImage = styled.img`
  object-fit: contain;
  height: 100%;
`;
const Left = styled.div`
  flex: 1;
  /* padding: 20px; */
`;
const Right = styled.div`
  flex: 1;
  overflow-y: auto;
`;
const Main = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  /* border: 1px solid white; */
  overflow: hidden;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;
