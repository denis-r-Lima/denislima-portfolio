import styled from "styled-components";

export const Container = styled.button`
  border: none;
  position: relative;
  padding: 1.5rem 5rem;
  background-color: transparent;
  overflow: hidden;
  margin: 1rem auto;
  text-transform: uppercase;
  color: ${(props) => props.theme.pallet.color.background};
  box-shadow: none;
  cursor: pointer;
  font-weight: bolder;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: ${(props) => props.theme.pallet.color.primary};
    transition: all 0.5s;
    z-index: -1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid ${(props) => props.theme.pallet.color.background};
    z-index: -2;
  }

  &:hover {
    &::after {
      transform: translate(-50%, -50%) scale(6);
    }
  }
`;
