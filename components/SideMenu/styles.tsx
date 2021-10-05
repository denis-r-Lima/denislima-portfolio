import styled from "styled-components";

export const Container = styled.div`
  &.Hidden {
    width: 0;
    background-color: transparent;
    transition: width linear 0.8s;
    & > #Menu {
      width: 0;
      transition: width linear 0.3s;
    }
  }
  position: fixed;
  top: 0;
  width: 100vw;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Menu = styled.div`
  & > ul {
    list-style-type: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  width: 20rem;
  height: 100%;
  background-color: #5b616a;
  color: fcf7f8;
  transition: width linear 0.3s;
  overflow: hidden;
  padding-top: 5rem;
`;
export const MenuCall = styled.div`
  &.Selected {
    & > div {
      transition: all linear 0.3s;
    }
    & > #Top {
      transform: rotate(45deg) translate(0, 0.5rem);
    }
    & > #Middle {
      transform: rotate(-45deg) translate(0, -0.5rem);
    }
    & > #Bottom {
      opacity: 0;
    }
  }
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #5b616a;
`;
export const BurguerMenu = styled.div`
  height: 0.3rem;
  margin: 0.2rem;
  width: 2.5rem;
  background-color: #fcf7f8;
  transition: all linear 0.3s;
`;
export const MenuButton = styled.li`
  position: relative;
  color: #fcf7f8;
  font-size: 2.5rem;
  padding: 2rem 3rem;
  width: 100%;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    height: 2px;
    width: 0;
    background-color: #fff;
    transition: width linear 0.3s;
  }
  &:hover {
    &::after {
      width: 85%;
    }
  }
`;
