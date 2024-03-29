import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.pallet.color.backgroundSecondary};
  padding: 1rem;
  position: relative;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

export const FromContainer = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 5rem auto;
  position: relative;

  & > div {
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.8s;
  }

  &.show {
    & > div {
      transform: scaleY(1);
    }
  }

  @media only screen and (max-width: 450px) {
    max-width: 300px;
  }
`;

export const NormalText = styled.p`
  color: ${(props) => props.theme.pallet.color.primaryLight};
  margin: 3rem;
  text-align: center;
  font-size: 1.7rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.pallet.color.background};
  margin: 5rem auto;
  width: fit-content;
  text-align: center;
  transform: translateX(50%);
  opacity: 0;
  transition: transform 1s, opacity 1.3s ease-in;
  font-size: 3.5rem;
  font-family: ${(props) => props.theme.typography.fontFamilyTitle};
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    background-color: ${(props) => props.theme.pallet.color.secondaryLight};
    width: 80%;
    height: 3px;
    border-radius: 1rem;
    position: absolute;
    bottom: -1rem;
    left: 30%;
    transform: translateX(-150%);
    opacity: 0;
    transition: all 0.8s linear 1s;
  }

  &.show {
    transform: translateX(0);
    opacity: 1;
    &::after {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 4rem;
  width: fit-content;
  margin-left: auto;
`;
