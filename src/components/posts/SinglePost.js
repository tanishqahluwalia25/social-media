import React from "react";
import styled from "styled-components";

const SinglePost = () => {
  return (
    <>
      <Main>
        <Left>
          <PostImage src={""} />
        </Left>

        <Right></Right>
      </Main>
    </>
  );
};

export default SinglePost;
const PostImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const Left = styled.div``;
const Right = styled.div``;
const Main = styled.div``;
