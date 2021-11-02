import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  transition: opacity 0.2s linear 0.25s;
  z-index: 1000;
  color: ${(props) => props.theme.pallet.color.background};

  &.hide {
    transition: opacity 0.2s, transform 0s linear 0.25s;
    transform: scaleX(0);
    opacity: 0;
  }
`;

export const MenuButton = styled.span`
  padding: 0 1rem;
  margin: 0 1rem;
  cursor: pointer;
  transition: color 0.2s;
  position: relative;
  transition: color 0.4s;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.pallet.color.secondaryLight};
    transform: translate(-50%, 200%) scale(0);
    transition: transform 0.4s;
  }

  &:hover {
    color: ${(props) => props.theme.pallet.color.secondaryLight};
    &::after {
      transform: translate(-50%, 200%) scale(1);
    }
  }
`;
