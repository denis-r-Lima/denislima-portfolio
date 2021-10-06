import styled from "styled-components";

export const Container = styled.nav`
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

export const LinkButton = styled.button`
  position: relative;
  margin: 0;
  padding: 0.5rem 1rem;
  background-color: transparent;
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
    transform: translate(-50%, 200%);
    height: 2px;
    width: 0;
    background-color: #275dad;
    transition: width linear 0.1s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
    &::before {
      height: 100%;
    }
    color: #275dad;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-200%, -50%);
    height: 0;
    width: 2px;
    background-color: #275dad;
    transition: height linear 0.1s;
  }
`;
