import { IoImagesOutline } from "react-icons/io5";
import styled from "styled-components";
const AddImage = () => {
  return (
    <Main>
      <IoImagesOutline size="25%" />
      <Add>Drop or Drag an image here.</Add>
    </Main>
  );
};

export default AddImage;

const Main = styled.div`
  height: 100%;
  width: 100%;
  border: 5px dashed white;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  opacity: 0.2;
`;

const Add = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;
