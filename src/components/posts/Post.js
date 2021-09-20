import React from "react";
import styled from "styled-components";
import AvatarWithName from "../user/AvatarWithName";
import PostActions from "./PostActions";

const Post = () => {
  return (
    <>
      <Main>
        <AvatarWithName />
        <Image
          src={
            "https://picsum.photos/id/1/" +
            Math.floor(Math.random() * 300 + 1200)
          }
        />
        <PostActions />
      </Main>
    </>
  );
};

export default Post;

const Image = styled.img`
  width: 100%;
  border-radius: 0.7rem;
  object-fit: cover;
`;

const Main = styled.div`
  border-radius: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  /* height: 20rem; */
  flex: 0.2;
  margin: 1rem 0.5rem;
  overflow: hidden;
  /* padding: 5px; */
  padding: 10px 5px;
  /* max-width: 400px; */
  box-shadow: rgba(125, 125, 125, 0.1) 0px 0px 100px 0px;
  background-color: black;
  border: 1px solid #111;
`;
