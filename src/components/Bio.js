import styled from "styled-components";

const Bio = () => {
  return (
    <div style={{ "background-color": "aqua" }}>
      <Bio_Name>Rishabh Prakash</Bio_Name>
      <Bio_Desc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo
        interdum, cursus ex eu, sollicitudin tellus. In hac habitasse platea
        dictumst. Nulla vel neque id orci volutpat venenatis sit amet vitae
        elit. Aliquam tincidunt velit placerat, fringilla libero at, condimentum
        dui. Suspendisse urna tellus, posuere eget tincidunt non, dapibus quis
        erat.
      </Bio_Desc>
    </div>
  );
};

export default Bio;

const Bio_Name = styled.h1`
  text-align: left;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
`;

const Bio_Desc = styled.p``;
