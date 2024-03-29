import styled from "styled-components";

export const Container = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: #eee;
  padding: 2rem 1rem;
  border-right: 1px solid #aaa;
  display: flex;
  flex-direction: column;
  transition: transform linear 0.3s;
  z-index: 99;
  &.Hidden {
    transform: translateX(-100%);
  }

  @media only screen and (max-width: 450px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 25rem;
    max-width: 50%;
    padding-top: 7rem;
  }
`;

export const AdminButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  margin: 0.5rem;
  color: #666;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.5rem;
  border-radius: 10rem;
  &:hover {
    color: #333;
    background-color: #f1f1f1;
  }

  &.Current {
    background-color: #fefefe;
    color: #333;
    cursor: default;

    &:hover {
      background-color: #fefefe;
    }
  }
`;

export const SignOutButton = styled(AdminButton)`
  margin-top: auto;
`;

export const BurgerContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 450px) {
    display: flex;
    z-index: 100;
  }
`;

export const BurgerLine = styled.span`
  height: 0.5rem;
  width: 3rem;
  border-radius: 5rem;
  margin: 0.2rem;
  background-color: #313131;
`;
