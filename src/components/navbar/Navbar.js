import React from "react";
import { AiFillHome, GrNew, BiNotification, CgProfile } from "react-icons/all";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Main>
      <Icons>
        <AiFillHome size={25} color={"red"} />
        <GrNew size={25} />
        <BiNotification size={25} />
        <CgProfile size={25} />
      </Icons>
    </Main>
  );
};

export default Navbar;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
const Main = styled.div`
  flex: 0.05;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(10, 10, 10);
  min-width: 50px;
`;
