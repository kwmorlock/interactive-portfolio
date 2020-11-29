import styled from "styled-components";

export const ProjectsLeft = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4% 7px;
`;

export const FlexProjects = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const FlexProjectsTwo = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const ButtonProjects = styled.a`
  background-color: black;
  border-color: black;
  color: hotpink;
  font-color: hotpink;
  border-radius: 12px;
  font-size: 2rem;
  margin: 0 auto;
  text-decoration: none;
  height: 5%;
  margin-top: 20px;
  text-align: center;
  padding-top: 1%;
  padding-bottom: 2%;
  padding-left: 2%;
  padding-right: 2%;
`;
