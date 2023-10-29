import styled from "styled-components";

const burgerAnimationTime = "0.3s";
const burgerAnimationDelay = "0.3s";

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
    transition: transform 0.2s linear 0.1s, background-color 0.4s;
    transform: scale(1);
  }

  & > :first-child {
    transition: transform ${burgerAnimationTime} linear ${burgerAnimationDelay};
    & > div {
      transition: transform ${burgerAnimationTime}, background-color 0.4s;
    }
  }
  & > :nth-child(2) {
    transition: opacity 0s linear ${burgerAnimationDelay};
  }
  & > :last-child {
    transition: transform ${burgerAnimationTime} linear ${burgerAnimationDelay};
    & > div {
      transition: transform ${burgerAnimationTime}, background-color 0.4s;
    }
  }

  &.opened {
    & > div > div {
      background-color: ${(props) => props.theme.typography.color};
    }
    background-color: ${(props) => props.theme.pallet.color.background};
    & > :first-child {
      transition: transform ${burgerAnimationTime};
      transform: translateY(0.7rem);
      & > div {
        transition: transform ${burgerAnimationTime} linear
            ${burgerAnimationDelay},
          background-color 0.4s;
        transform: rotate(45deg);
      }
    }
    & > :nth-child(2) {
      opacity: 0;
    }
    & > :last-child {
      transition: transform ${burgerAnimationTime};
      transform: translateY(-0.7rem);
      & > div {
        transition: transform ${burgerAnimationTime} linear
            ${burgerAnimationDelay},
          background-color 0.4s;
        transform: rotate(-45deg);
      }
    }
  }
`;

export const Wrapper = styled.div`
  margin: 0.2rem 0;
`;

export const BurgerLines = styled.div`
  height: 0.3rem;
  width: 2.5rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.pallet.color.background};
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 999;
  justify-content: flex-end;
  transform: scaleX(0);
  transition: transform 0s linear ${burgerAnimationDelay};
  & > :first-child {
    transition: transform ${burgerAnimationTime};
    transform: translateX(100%);
  }
  &.show {
    transform: scaleX(1);
    transition: transform 0s;
    & > :first-child {
      transform: translateX(0);
    }
  }
`;

export const MenuSideDiv = styled.div`
  height: 100vh;
  width: 250px;
  background-color: ${(props) => props.theme.pallet.color.background};
  font-size: 2.3rem;
  padding: 3rem 1rem;
`;

export const MenuButton = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40%;
    height: 2px;
    background-color: ${(props) => props.theme.typography.color};
    transform: translateX(-100%);
    transition: 0.3s;
  }

  &:hover {
    &::after {
      transform: translateX(0);
    }
  }
`;
