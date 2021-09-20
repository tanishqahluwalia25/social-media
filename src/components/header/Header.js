import React from "react";
import styled from "styled-components";
import { Logos } from "../../resources/resources";
import logo from "../../assets/logos/logo-black.png";
const Header = () => {
  return (
    <Main>
      <Logo>
        <LogoImage src={Logos.svg.color} alt="hi" />
        <LogoHeading>NORD</LogoHeading>
      </Logo>
      <Search placeholder="Search" />
    </Main>
  );
};

export default Header;

const LogoHeading = styled.p`
  font-size: 35px;
  font-weight: 200;
  font-family: "montserrat";
  /* color: #aaa; */
  /* font-style: italic; */
  padding-left: 5px;
`;
const LogoImage = styled.img`
  height: 40px;
  margin: 0px 5px;
  display: none;
`;

const Logo = styled.p`
  font-weight: 200;
  font-size: 40px;
  /* height: 5rem; */
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: black;
  color: white;
  font-family: monospace !important;
`;
