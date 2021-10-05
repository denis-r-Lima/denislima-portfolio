import styled from "styled-components";

export const Container = styled.nav`
  & > a {
    position: relative;
    margin: 0;
    padding: 0.5rem 2rem;
    font-weight: bold;
    font-size: 1.8rem;
    color: #5b616a;
    cursor: pointer;
    border: 2px solid transparent;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      height: 2px;
      width: 0;
      background-color: #275dad;
      transition: width linear 0.3s;
    }
    &:hover {
      &::after {
        width: 85%;
      }
      color: #275dad;
    }
  }
  position: fixed;
  top: 0;
  background-color: #fcf7f8;
  width: 100%;
  max-width: 1420px;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  z-index: 5;
`;
