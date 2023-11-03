import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  max-width: 100rem;
  overflow: hidden;
  padding: 2rem 3rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
    color: ${(props) => props.theme.pallet.color.primaryVeryLight};
    margin: 2rem;
  }
`;

const RemoveCard = keyframes`
from{

}
to {
    padding: 0;
    max-height: 0;
}
`;

export const Card = styled.div`
  padding: 2rem 3rem;
  background-color: ${(props) => props.theme.pallet.color.primaryVeryLight};
  width: 100%;
  border-radius: 0.5rem;
  margin: 0.75rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  transition: margin-left 0.3s linear 0.35s, transform 0.3s linear 0s,
    background-color 0.2s linear 0s, opacity 0.6s linear 0s;

  &.remove {
    opacity: 0;
    transform: scale(90%);
    margin: 0;

    animation: ${RemoveCard};
    animation-duration: 0.3s;
    animation-delay: 0.72s;
  }

  &.completed {
    background-color: ${(props) => props.theme.pallet.color.primary};
    margin-left: 200rem;
  }

  &.incomplete {
    background-color: ${(props) => props.theme.pallet.color.secondary};
    margin-left: -200rem;
  }

  &.fixed {
    margin: 0.75rem 0;
  }

  & div {
    display: flex;
    gap: 2rem;
    & svg {
      cursor: pointer;
    }
  }
`;

export const CardTextBox = styled.h2`
  max-width: 70%;
  font-size: 2rem;
`;
