import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import SinglePost from "../posts/SinglePost";
import AvatarInfo from "./AvatarInfo";
import PostInfo from "./PostInfo";

const Post = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "90%",
      maxHeight: "600px",
      width: "90%",
      maxWidth: "1000px",
      backgroundColor: "black",
      padding: "0px",
    },
  };
  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <SinglePost />
      </ReactModal>
      <Card onClick={openModal}>
        <AvatarInfo />
        <PostImg
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Profile"
        />
        <PostInfo />
      </Card>
    </>
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
  margin: 10px;
  border: 1px solid gray;
`;

const PostImg = styled.img`
  max-width: 100%;
  margin: 0px;
`;
