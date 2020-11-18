import styled from "styled-components";

export const AboutLeft = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4% 7px;
`;

export const FlexAbout = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const FlexAboutTwo = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
