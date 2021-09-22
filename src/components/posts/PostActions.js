import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import { FaSave } from "react-icons/fa";
const PostActions = () => {
  const icon = {
    color: "#ffffff55",
    size: 20,
    className: "icon",
  };
  return (
    <>
      <Main>
        <Left>
          <AiFillHeart {...icon} />
          <FaComment {...icon} />
          <TiLocationArrow {...icon} />
        </Left>
        <FaSave {...icon} />
      </Main>

      <Text>
        Liked by <b>256 people</b>
      </Text>

      <Caption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui
        neque aspernatur eum non quia!
      </Caption>
    </>
  );
};

export default PostActions;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px;

  .icon {
    margin: 4px;
  }
`;
const Left = styled.div`
  display: flex;
`;

const Text = styled.p`
  /* font-weight: 700; */
  padding: 5px 10px;
  font-size: 14px;
`;
const Caption = styled.p`
  font-weight: 500;
  padding: 5px 10px;
  font-size: 14px;
`;
