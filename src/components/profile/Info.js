import styled from "styled-components";

const Info = () => {
  return (
    <div>
      <ProfilePic>
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Profile"
        />
      </ProfilePic>
      <Name>nkchaudhary01</Name>
      <Profession>Wildlife Photographer</Profession>
      <Details>
        <Text>
          <Strong>98</Strong> Posts
        </Text>
        <Text>
          <Strong>3.5k</Strong> Followers
        </Text>
        <Text>
          <Strong>900</Strong> Followings
        </Text>
      </Details>
    </div>
  );
};

export default Info;

const ProfilePic = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  padding: 3px;
  margin: 10px auto;
  overflow: hidden;
  border: 3px solid #fd297a;
  img {
    height: 100%;
    border-radius: 100%;
  }
`;

const Name = styled.h1`
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

const Profession = styled.p`
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  margin: 0px;
  margin-bottom: 20px;
`;

const Details = styled.div`
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-around;
  margin-bottom: 35px;
`;

const Text = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
`;

const Strong = styled.h1`
  font-weight: 700;
  font-size: 14px;
`;
