import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 1rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.typography.color};
  margin: 5rem auto;
  width: fit-content;
  text-align: center;
  transform: translateX(50%);
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

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Card = styled.div`
  width: 40%;
  min-width: 38rem;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: all 1s;

  &#Me {
    transform: translateX(-50%);
  }
  &#Skills {
    transform: translateX(50%);
  }

  &.show {
    &#Me,
    &#Skills {
      transform: translateX(0);
    }
    opacity: 1;
  }
`;

export const ImgContainer = styled.div`
  width: 60%;
  aspect-ratio: 1;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: url("./img/2020-03-07_21-31-47_013.png");
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(1.5) contrast(1.1);
`;

export const Question = styled.h1`
  margin: 2rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 75%;
    height: 3px;
    background-color: ${(props) => props.theme.pallet.color.secondary};
    bottom: -0.5rem;
    left: 30%;
  }
`;

export const Text = styled.p`
  line-height: 2rem;
  text-align: justify;
  font-weight: 100;
  font-size: 1.7rem;
`;

export const BarContainer = styled.div`
  width: 100%;
  margin: 0.4rem 0;
  display: flex;
`;

export const BarName = styled.div`
  width: 25%;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.pallet.color.primaryLight};
  text-align: center;
  font-size: 1.5rem;

  @media only screen and (max-width: 450px) {
    font-size: 1.2rem;
    width: 30%;
  }
`;

interface BarProps {
  width: string;
}

export const BarExternal = styled.div<BarProps>`
  width: 75%;
  background-color: ${(props) => props.theme.pallet.color.backgroundDarker};
  position: relative;

  &::after {
    content: "${(props) => props.width}";
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-family: ${(props) => props.theme.typography.fontFamilyTitle};
  }
  @media only screen and (max-width: 450px) {
    width: 70%;
  }
`;

export const BarInternal = styled.div<BarProps>`
  width: ${(props) => props.width};
  height: 100%;
  background-color: ${(props) => props.theme.pallet.color.primary};
`;
