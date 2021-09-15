import React from "react";
import styled from "styled-components";
import Login from "../../components/login/Login";
// import Svg from "./Svg";

import LeftImg from "../../assets/login-signin (1).svg";

const AuthPage = () => {
  return (
    <>
      <Wrap>
        <Left>
          <LeftImage src={LeftImg} />

          {/* <Svg /> */}
        </Left>
        <Right>
          <Login />
        </Right>
      </Wrap>
    </>
  );
};

export default AuthPage;

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
`;
const Left = styled.div`
  /* flex: 1; */
`;

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;
