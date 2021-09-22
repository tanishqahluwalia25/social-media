import styled from "styled-components";

const Post = (props) => {
  return (
    <Block>
      <img src={props.src} alt="Post" />
    </Block>
  );
};

export default Post;

const Block = styled.div`
  height: 110px;
  width: 110px;
  margin: 0px;
  display: inline-block;
  padding: auto;
  border: 2px solid black;

  img {
    height: 100%;
    width: 100%;
    margin: auto;
    object-fit: cover;
  }
`;
