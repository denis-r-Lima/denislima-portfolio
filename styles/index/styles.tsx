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
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;
export const BackUp = styled.div`
  @media only screen and (max-width: 450px) {
    bottom: 1rem;
    right: 1rem;
  }
  display: grid;
  place-items: center;
  position: fixed;
  bottom: 3rem;
  right: 4rem;
  background-color: #5b616a;
  border-radius: 50%;
  border: 0.1rem solid #fff;
  width: 4rem;
  height: 4rem;
  font-size: 3rem;
  z-index: 2;
  padding-top: 0.4rem;
`;
