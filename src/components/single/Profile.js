import styled from "styled-components";

const Profile = () => {
  return (
    <Wrap>
      <ProfileImg
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Profile"
      />
      <ProfileInfo>
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
      </ProfileInfo>
    </Wrap>
  );
};

export default Profile;

const Wrap = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 50px 25px 25px;
`;

const ProfileImg = styled.img`
  width: 50%;
  @media (min-width: 600px) {
    width: 35%;
  }
  max-width: 300px;
  border-radius: 50%;
  border: 2px solid red;
  margin: 15px;
  padding: 5px;
  box-sizing: border-box;
`;

const ProfileInfo = styled.div`
  min-height: 250px;
  max-width: 350px;
  width: 70%;
  margin: 15px;
  text-align: left;
  padding: 5% 0;
  box-sizing: border-box;
  @media (max-width: 600px) {
    text-align: center;
    padding: 0px;
  }
`;

const Name = styled.p`
  font-size: 40px;
`;

const Profession = styled.p`
  font-size: 18px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 50px auto 20px;
  padding: 0 10px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 100;
`;

const Strong = styled.h1`
  font-size: 18px;
`;
