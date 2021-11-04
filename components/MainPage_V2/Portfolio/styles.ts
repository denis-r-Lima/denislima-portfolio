import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.pallet.color.backgroundDarker};
  padding: 1rem 3rem;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto 5rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.typography.color};
  margin: 5rem auto;
  width: fit-content;
  text-align: center;
  transform: translateX(-50%);
  opacity: 0;
  transition: transform 1s, opacity 1.3s ease-in;
  font-size: 3.5rem;
  font-family: ${(props) => props.theme.typography.fontFamilyTitle};
  text-transform: uppercase;

  &::after {
    content: "";
    background-color: ${(props) => props.theme.pallet.color.secondary};
    width: 80%;
    height: 3px;
    border-radius: 1rem;
    position: absolute;
    bottom: -0.8rem;
    right: 30%;
    transform: translateX(100%);
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

export const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
