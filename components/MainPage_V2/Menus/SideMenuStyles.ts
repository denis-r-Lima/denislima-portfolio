import styled from "styled-components";

export const Container = styled.div``;

export const BurgerMenuContainer = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.pallet.color.secondary};
  position: fixed;
  top: 3rem;
  right: 3rem;
  transform: scale(0);
  cursor: pointer;
  transition: transform 0.2s linear;
  z-index: 1000;
  &.show {
    transition: transform 0.2s linear 0.1s;
    transform: scale(1);
  }
`;

export const BurgerLines = styled.span`
  height: 0.3rem;
  width: 2.5rem;
  margin: 0.2rem 0;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.pallet.color.background};
`;
