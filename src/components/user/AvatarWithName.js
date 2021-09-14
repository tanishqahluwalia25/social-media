import React from "react";
import styled from "styled-components";

const AvatarWithName = () => {
  return (
    <>
      <Main>
        <Avatar src={"https://picsum.photos/200"} />
        <Details>
          <Name>nkchaudhary01</Name>
          <Location>nkchaudhary01</Location>
        </Details>
      </Main>
    </>
  );
};

export default AvatarWithName;
const Main = styled.div`
  display: flex;
  /* height: 5rem; */
  padding: 1rem;
  align-items: center;
  justify-content: flex-start;
`;
const Avatar = styled.img`
  height: 2.5rem;
  aspect-ratio: 1;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 1rem;
  border: 1px solid red;
`;
const Name = styled.p`
  font-weight: 700;
  text-transform: lowercase;
  font-size: 14px;
`;
const Details = styled.div``;
const Location = styled.p`
  font-weight: 300;
  font-size: 12px;
`;
