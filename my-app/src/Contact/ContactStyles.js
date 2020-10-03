import styled from "styled-components";

export const ContactLeft = styled.div`
width: 48%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 4% 7px;
`;

export const FlexContact = styled.div`
display:flex;
  flex-direction:row;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const FlexContactTwo = styled.div`
display:flex;
  flex-direction:row;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const ButtonContact = styled.a`
background-color: black;
border-color: black;
color: hotpink;
font-color: hotpink;
margin-top: -30px; 
margin: 0 auto;
width: 45%;
border-radius: 12px;
font-size: 1.2rem;
margin: 0 auto;
text-align: center;
  text-decoration: none;
`;
