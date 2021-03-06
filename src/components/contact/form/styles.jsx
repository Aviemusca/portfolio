import styled from "styled-components";

export const FormContainer = styled.div`
  border: solid 0px #ddd;
  width: ${({ mobile }) => (mobile ? 80 : 40)}%;
  border-radius: 5px;
  margin: 5em auto;
  padding: 1.5em 3em;
  background: linear-gradient(#25779590, #ac2cac80);
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 0.75em;
  padding-bottom: 0.25em;
  border-bottom: solid 1px #ddd;
`;

export const FormSubText = styled.p`
  margin-top: 0.25em;
  color: #777;
`;
