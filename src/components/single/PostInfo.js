import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { RiBookmark3Line } from "react-icons/ri";
const PostInfo = () => {
  const icon = {
    color: "white",
    size: 24,
    className: "icon",
  };
  return (
    <PostDetails>
      <Icons>
        <Left>
          <FaRegHeart {...icon} />
          <BiMessageSquareDetail {...icon} />
          <FiSend {...icon} />
        </Left>
        <RiBookmark3Line {...icon} />
      </Icons>
      <Caption>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500.
      </Caption>
      <View>View Comments</View>
    </PostDetails>
  );
};

export default PostInfo;

const PostDetails = styled.div`
  text-align: left;
  width: auto;
  min-height: 100px;
  margin: 15px;
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 33%;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;
const Caption = styled.div`
  font-size: 14px;
  margin: 5px 0px;
`;

const View = styled.div`
  font-size: 12px;
  color: grey;
`;
