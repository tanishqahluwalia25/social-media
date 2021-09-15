import styled from "styled-components";

const Bio = () => {
  return (
    <BioInfo>
      <BioName>Rishabh Prakash</BioName>
      <BioDesc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo
        interdum, cursus ex eu, sollicitudin tellus. In hac habitasse platea
        dictumst. Nulla vel neque id orci volutpat venenatis sit amet vitae
        elit. Nulla vel neque id orci volutpat venenatis sit amet vitae
        elit. 
      </BioDesc>
    </BioInfo>
  );
};

export default Bio;

const BioInfo = styled.div`
  margin-bottom: 35px;
`;

const BioName = styled.h1`
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
`;

const BioDesc = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: 300px;
  font-family: "Poppins", sans-serif;
`;
