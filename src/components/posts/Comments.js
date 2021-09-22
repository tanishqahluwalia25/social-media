import React from "react";
import styled from "styled-components";
import AvatarInfo from "../single/AvatarInfo";

const Comments = () => {
  return (
    <>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </>
  );
};

const Comment = () => {
  return (
    <>
      <AvatarInfo />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        architecto provident blanditiis numquam eligendi eaque?
           <Time>2 hours ago</Time>
      </Text>
    </>
  );
};

export default Comments;

const Text = styled.p`
  padding: 0px 20px;
  font-size: 12px;
`;
const Time = styled.p`
  font-size: 12px;
  opacity: 0.8;
`;
