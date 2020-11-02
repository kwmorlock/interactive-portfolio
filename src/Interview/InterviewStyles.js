import styled from "styled-components";

export const InterviewContents = styled.div`
  margin: 0 auto;
  padding: 2.2rem;
  display: flex;
  width: 66.6%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column;
  }
`;