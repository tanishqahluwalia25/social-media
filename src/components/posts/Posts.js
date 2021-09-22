import React, { useState } from "react";
import Post from "../single/Post";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import ReactModal from "react-modal";
import SinglePost from "./SinglePost";
const Posts = () => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    600: 1,
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <SinglePost />
      </ReactModal>
      <Main>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Masonry>
      </Main>
    </>
  );
};

export default Posts;

const Main = styled.div`
  margin: 0 15px 0 40px;
  overflow-y: scroll;
  
  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #222;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(#fd297a, #9424f0);
  }
`;
