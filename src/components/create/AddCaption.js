import styled from "styled-components";

const AddCaption = () => {
  return (
    <Main>
      <Add placeholder="Add a caption. . . ." maxLength="1000"/>
    </Main>
  );
};

export default AddCaption;

const Main = styled.div`
  height: 100%;
  width: 100%;
`;
const Add = styled.textarea`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  text-align: left;
  font-size: 18px;
  font-family: "Poppins";
  color: white;
  resize: none;
  overflow: auto;
  :focus {
    border: none;
    outline: none;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: black;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgb(50, 50, 50);
    border-radius: 5px;
    margin-top: 50px;
  }
`;
