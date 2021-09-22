import styled from "styled-components";
// import { RiEditBoxLine } from "react-icons/ri";
import { VscBellDot } from "react-icons/vsc";
import Bio from "./Bio";
import Info from "./Info";
import Posts from "./Posts";

const Profile = () => {
  return (
    <Prof>
      <BellBtn>
        <VscBellDot />
      </BellBtn>
      <Info />
      <Bio />
      <Posts />
    </Prof>
  );
};

export default Profile;

const Prof = styled.div`
  height: 100vh;
  width: 400px;
  padding: 25px;
  margin: auto;
  text-align: center;
  box-sizing: border-box;
  border: none;
  border-left: 1px solid black;
  overflow: auto;
  
  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: auto;
    margin: 5px 0;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: auto;
    // background: linear-gradient(#fd297a, #9424f0);
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    /* background: dodgerblue; */
  }
`;

const BellBtn = styled.div`
  width: 100%;
  height: auto;
  text-align: right;
  font-size: 22px;
  color: gold;
  // display: flex;
  // align-items: center;
  margin-bottom: 50px;
`;
