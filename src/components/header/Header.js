import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Main>
      <Logo>Instagram</Logo>
      <Search placeholder="Search" />
    </Main>
  );
};

export default Header;

const Logo = styled.p`
  font-weight: 200;
  font-size: 20px;
`;

const Search = styled.input`
  background: #00000022;
  border: none;
  outline: none;
  padding: 0.5rem;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background: white;
  border-left: 0.5px solid #00000022;
  border-right: 0.5px solid #00000022;
  position: sticky;
  top: 0px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;
