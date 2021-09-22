import styled from "styled-components";
const AvatarInfo = () => {
  return (
    <>
      <User>
        <ProfileImg
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Profile"
        />
        <UserDetails>
          <Username>Rishabh Prakash</Username>
          <Profession>Web Developer</Profession>
        </UserDetails>
      </User>
    </>
  );
};

export default AvatarInfo;
const User = styled.div`
  text-align: left;
  margin: 15px;
  height: 45px;
  display: flex;
  
`;

const ProfileImg = styled.img`
  height: 100%;
  border-radius: 50%;
  border: 2px solid white;
  padding: 1px;
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
`;

const UserDetails = styled.div`
  display: inline-block;
  margin-left: 15px;
`;

const Username = styled.h4`
  font-size: 17px;
`;

const Profession = styled.p`
  font-size: 12px;
`;
