import styled from "styled-components";

export const NavWrapper = styled.div`
  border-bottom: 8px solid rgb(189, 35, 125);
  margin-bottom: 30px;
  display: flex;
  background: black;
`;

export const NavContents = styled.div`
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

export const HomeWrapper = styled.div`
  background-color: hotpink;
  width: 100%;
`;
