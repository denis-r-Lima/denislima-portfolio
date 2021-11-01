import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 450px) {
    width: 100vw;
    margin: 0;
    border: none;
    border-radius: 0;
  }
  position: relative;
  align-self: center;
  width: 100%;
  max-width: 1420px;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;
