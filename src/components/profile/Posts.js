import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import Post from "./Post";
import CreatePost from "../create/CreatePost";

const Posts = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      borderRadius: "15px",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <CreatePost />
      </ReactModal>

      <Head>Posts</Head>
      <Button onClick={openModal}>Create Post</Button>
      <Post src="https://images.unsplash.com/photo-1585416294584-b849d9e571ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9zdHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <Post src="https://images.unsplash.com/photo-1585416294584-b849d9e571ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9zdHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <Post src="https://images.unsplash.com/photo-1585416294584-b849d9e571ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9zdHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <Post src="https://images.unsplash.com/photo-1519417688547-61e5d5338ab0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <Post src="https://images.unsplash.com/photo-1519417688547-61e5d5338ab0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <Post src="https://images.unsplash.com/photo-1519417688547-61e5d5338ab0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
    </div>
  );
};

export default Posts;

const Head = styled.h1`
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5px;
`;

const Button = styled.button`
  height: 40px;
  width: 80%;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  margin-bottom: 30px;
  color: white;
  background: -webkit-linear-gradient(to right, #eb3398, #f85d3e);
  background: linear-gradient(to right, #eb3398, #f85d3e);
  -webkit-box-shadow: 0px 10px 15px -3px #eb3398;
  box-shadow: 0px 10px 15px -3px #eb3398;
  border: none;
`;
