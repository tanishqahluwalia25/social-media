import styled from "styled-components";
import { VscBellDot } from "react-icons/vsc";
import Bio from "./Bio";

const Profile = () => {
  return (
    <Prof>
      <VscBellDot />
      <ProfilePic>
        <img
          src="https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Profile"
        />
      </ProfilePic>
      <Bio/>
    </Prof>
  );
};

export default Profile;

const Prof = styled.div`
  height: 1024px;
  width: 400px;
  padding: 25px;
  margin: 0px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid black;
`;

const ProfilePic = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  padding: 2px;
  margin: auto;
  overflow: hidden;
  border: 2px solid rgb(215, 118, 245);
  img {
    height: 100%;
    border-radius: 100%;
  }
`;
