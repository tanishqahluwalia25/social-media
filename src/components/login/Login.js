import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const history = useHistory();
  return (
    <>
      <Wrap>
        <Heading>Login.</Heading>
        <Input placeholder="username or email" />
        <Input placeholder="password" />
        <LoginButton to="/home">Login</LoginButton>
      </Wrap>
    </>
  );
};

export default Login;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  max-width: 500px;
  margin: auto;
  flex: 1;
`;
const Input = styled.input`
  display: block;
  border: none;
  outline: none;
  border-bottom: 2px solid purple;
  width: 100%;
  padding: 0.5rem;
  font-size: 18px;
`;
const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 1rem auto;
  width: 100%;
  max-width: 250px;
  padding: 0.5rem;
  color: white;
  font-weight: 800;
  font-size: 20px;
  border-radius: 8px;
  color: white;
  background: -webkit-linear-gradient(to right, #eb3398, #f85d3e);
  background: linear-gradient(to right, #eb3398, #f85d3e);
  -webkit-box-shadow: 0px 10px 15px -3px #eb3398;
  box-shadow: 0px 10px 15px -3px #eb3398;
  border: none;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  text-decoration: none;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
const Heading = styled.h1`
  font-weight: 800;
  font-size: 25px;
`;
