import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20vw auto;
  overflow: hidden;

  @media only screen and (max-width: 450px) {
    grid-template-columns: auto;
  }
`;
