import styled from "styled-components"

export const Container = styled.div`
  @media only screen and (max-width: 450px) {
    display: flex;
  }
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
  display: none;
  flex-direction: row;
  justify-content: flex-end;
`

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
`
export const MenuCall = styled.div`
  @media only screen and (max-width: 450px) {
    display: flex;
  }
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
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border-radius: 1rem;
  z-index: 2;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #5b616a;
`
export const BurguerMenu = styled.div`
  height: 0.3rem;
  margin: 0.2rem;
  width: 2.5rem;
  background-color: #fcf7f8;
  transition: all linear 0.3s;
`
export const MenuButton = styled.li`
  color: #fcf7f8;
  font-size: 2.5rem;
  padding: 1rem;
  border-bottom: 0.1rem solid rgba(252, 247, 248, 0.2);
  width: 100%;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
`
