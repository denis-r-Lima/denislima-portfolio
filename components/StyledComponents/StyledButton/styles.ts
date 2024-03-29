import styled from "styled-components";

type ButtonProps = {
  color?: string;
  backgroundColor?: string;
  background?: boolean;
};

export const Container = styled.button<ButtonProps>`
  border: none;
  position: relative;
  padding: 1.5rem 5rem;
  background-color: transparent;
  overflow: hidden;
  margin: 1rem 0;
  width: fit-content;
  text-transform: uppercase;
  color: ${(props) => props.color || props.theme.pallet.color.background};
  box-shadow: none;
  cursor: pointer;
  font-weight: bolder;
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 1;
  font-family: ${(props) => props.theme.typography.fontFamily};

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: ${(props) =>
      props.backgroundColor || props.theme.pallet.color.primary};
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
    border: 3px solid
      ${(props) => props.color || props.theme.pallet.color.background};
    z-index: -2;
    background-color: ${(props) =>
      props.background ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)"};
  }

  &:hover {
    &::after {
      transform: translate(-50%, -50%) scale(6);
    }
  }

  &:active {
    transform: translateY(3px);
  }
`;
