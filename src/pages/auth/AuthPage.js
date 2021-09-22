import React from "react";
import styled from "styled-components";
import Login from "../../components/login/Login";
// import Svg from "./Svg";

import LeftImg from "../../assets/login-signin.svg";

const AuthPage = () => {
  return (
    <>
      <Wrap>
        <Left>
          <LeftAbsolute>
            <Heading>
              Welcome to <br />
              Instagram
            </Heading>
            <LeftImage src={LeftImg} />
          </LeftAbsolute>
        </Left>
        <Right>
          <Login />
        </Right>
      </Wrap>
    </>
  );
};

export default AuthPage;

const LeftAbsolute = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Heading = styled.p`
  font-weight: 800;
  color: white;
  font-size: 50px;
  position: absolute;
  z-index: 100;
  top: 8%;
  left: 10%;
  /* transform: translate(-50%, -50%); */
`;

const Right = styled.div`
  flex: 1;
  /* flex: -1; */
  display: flex;
  flex-direction: column;
`;

const LeftImage = styled.img`
  object-fit: cover;
  height: 100%;
  /* width: 100%; */
  position: relative;
`;
const Left = styled.div`
  /* flex: 1; */
`;

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;
