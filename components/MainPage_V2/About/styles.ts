import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 20vh;
  background-color: transparent;
  padding: 1rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.typography.color};
  margin: 5rem;
  text-align: center;
  transform: translateX(-50%);
  opacity: 0;
  transition: transform 1s, opacity 1.3s ease-in;
  font-size: 3.5rem;
  font-family: ${(props) => props.theme.typography.fontFamilyTitle};
  text-transform: uppercase;

  &.show {
    transform: translateX(0);
    opacity: 1;
  }
`;
